import { useState, useEffect } from 'react';
import { createUser, getAllUsers,  } from './api';

export const useGetAllUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllUsers();
        setUsers(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return { users, error };
};

