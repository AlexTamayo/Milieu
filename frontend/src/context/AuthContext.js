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
import useAppData from '../reducers/useAppData';


const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {

  const [currentUser, setCurrentUser] = useState(null);

  const [errorMessage, setErrorMessage] = useState("");

  const { closeUserModal } = useAppData();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
  
    if (token) {
  
      validateToken(token).then(async (validationResponse) => {
        const userProfile = await getUserById(validationResponse.data.id);

        if (userProfile && userProfile.data) {
          const { passwordHash, ...userWithoutPassword } = userProfile.data;
          
          setCurrentUser(userWithoutPassword);
        }
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

  /* REMOVE ENTITY FROM CURRENT USER */
  function removeEntityFromCurrentUser(id, type) {
    if (type === 'business') {
        setCurrentUser(prevState => ({
            ...prevState,
            businesses: prevState.businesses.filter(business => business.id !== id)
        }));
    } else if (type === 'event') {
        setCurrentUser(prevState => ({
            ...prevState,
            events: prevState.events.filter(event => event.id !== id)
        }));
    }
}

  
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
    removeEntityFromCurrentUser,
    errorMessage,
    setErrorMessage
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
