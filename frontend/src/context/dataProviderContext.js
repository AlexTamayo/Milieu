// DataProvider.js
import { createContext, useEffect, useState } from 'react';
import { getAllEvents, getAllBusinesses, getAllUsers } from '../routes/api'; // Ensure correct import paths

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [eventData, setEventData] = useState([]);
  const [businessData, setBusinessData] = useState([]);
  const [userData, setUserData] = useState([]);

  // User modal opening and closing logic
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  
  const toggleUserModal = () => {
    setIsUserModalOpen(prevState => !prevState);
  };

  // Venue details modal opening and closing logic
  // Remember that I put part of the toggle logic in the milieu logo of nav bar.
  const [isVenueModalOpen, setVenueModalOpen] = useState(false);

  const toggleVenueModal = () => {
    setVenueModalOpen(!isVenueModalOpen);
  }

  const openVenueModal = () => {
    setVenueModalOpen(true);
  }

  const closeVenueModal = () => {
      setVenueModalOpen(false);
  }


  // Copy to clipboard script
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  // Marker venue type
  const [venueType, setVenueType] = useState(null);

  // vvv FORMATTERS vvv

  function formatPhoneNumber(phone) {
    const parts = phone.split('-');
    return `(${parts[0]}) ${parts[1]}-${parts[2]}`;
  }

  function formatURL(url) {
    return url.replace(/^https?:\/\/(www\.)?/, '');
  }

  function extractNumbers(inputString) {
    return inputString.replace(/\D/g, '');
  }

  function addressFormatter(location) {
    return `${location.streetAddress}, ${location.city}, ${location.region} ${location.postalCode}`
  }

  // ^^^ FORMATTERS ^^^



  useEffect(() => {
    // Fetch data when the component mounts
    getAllEvents()
    .then((data) => {
      // console.log('Fetched Event Data:', data.data); // Log fetched data
      setEventData(data.data)
    })
    .catch((error) => {
      console.error('Error fetching event data:', error);
    });

    getAllBusinesses()
    .then((data) => {
      // console.log('Fetched Business Data:', data.data); // Log fetched data
      setBusinessData(data.data)
    })
    .catch((error) => {
      console.error('Error fetching business data:', error);
    });

      getAllUsers()
      .then((data) => setUserData(data.data))
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <DataContext.Provider value={{ eventData,
                                   businessData,
                                   userData,
                                   isVenueModalOpen,
                                   toggleVenueModal,
                                   openVenueModal,
                                   closeVenueModal,
                                   isUserModalOpen,
                                   toggleUserModal,
                                   venueType,
                                   setVenueType,
                                   isCopied,
                                   handleCopy,
                                   formatPhoneNumber,
                                   formatURL,
                                   extractNumbers,
                                   addressFormatter
                                   }}>
      {children}
    </DataContext.Provider>
  );
};
