import {
  React,
  createContext,
  useState,
  useContext,
  useEffect
} from 'react';
import {
  createUser,
  loginUser,
  getUserById,
  validateToken
} from '../routes/api';
import useApplicationData from '../reducers/useApplicationData';


const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {

  const [currentUser, setCurrentUser] = useState(null);

  const [errorMessage, setErrorMessage] = useState("");

  const { closeUserModal, closeLoginModal } = useApplicationData();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
  
    if (token) {
      // Here, make an API call to validate the token and get the user's data
      // If valid, update your user state to reflect that the user is logged in
  
      validateToken(token).then(user => {

        const { passwordHash, ...userWithoutPassword } = user.data;
        setCurrentUser(userWithoutPassword);
      }).catch(error => {
        localStorage.removeItem('authToken');
      });
    }
  }, []);

  /* LOGIN LOGIC */
  const loginUserLogic = async (email, password) => {
    try {
      const response = await loginUser({ email, password });

      if (response.data && response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        const userProfile = await getUserById(response.data.userId);

        if (userProfile && userProfile.data) {
          const { passwordHash, ...userWithoutPassword } = userProfile.data;
          setCurrentUser(userWithoutPassword);
          // closeLoginModal();
          console.log('Im declared setCurrentUser');
        }
      } else {
        throw new Error('Invalid login credentials.');
      }

    } catch (error) {
      handleError(error);
    }
  };

  /* REGISTRATION LOGIC */
  const registerUserLogic = async (formData, lastLogin) => {
    const createdAt = lastLogin;
    const updatedAt = lastLogin;
    const role = "user";

    if (!formData.username || !formData.email || !formData.passwordHash) {
      setErrorMessage("Username, email, and password are required fields!");
      return;
    }

    try {
      const response = await createUser({ ...formData, createdAt, updatedAt, lastLogin, role });

      if (response.data && response.data.token) {
        localStorage.setItem("authToken", response.data.token);
        const { passwordHash, ...userWithoutPassword } = response.data.user;
        setCurrentUser(userWithoutPassword);
      } else {
        throw new Error("Registration was successful, but there was an issue logging in.");
      }

    } catch (error) {
      handleError(error);
    }
  };
  
  /* ERROR HANDLER */
  const handleError = (error) => {
    if (error.response && error.response.data && error.response.data.message) {
      setErrorMessage(error.response.data.message);
    } else {
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  const signOut = () => {
    localStorage.removeItem('authToken');
    closeUserModal();
    setCurrentUser(null);
  }

  const value = {
    currentUser,
    setCurrentUser,
    signOut,
    loginUserLogic,
    registerUserLogic,
    errorMessage,
    setErrorMessage
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
