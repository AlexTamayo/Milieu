import { useState, useEffect } from 'react';
import { createUser, getAllUsers, getMarkers, addMarker, updateMarker, deleteMarker } from './api';

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

export const useGetMarkers = () => {
  const [markers, setMarkers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMarkers();
        setMarkers(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return { markers, error };
};

