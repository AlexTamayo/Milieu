import { useState, useContext } from 'react';

const useAuth = () => {
  // Here, we are hardcoding a fake user. You can replace this with actual authentication methods later.
  const [user, setUser] = useState({
    id: 1,
    firstName: "John",
    username: "user1",
    // ... rest of the user details
  });

  const signOut = () => {
    setUser(null); // For now, this just sets the user to null.
  };

  return { user, signOut };
};

export default useAuth;
