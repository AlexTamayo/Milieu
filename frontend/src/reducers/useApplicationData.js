import { useEffect, useReducer } from 'react';
import { getAllEvents, getAllBusinesses, getAllUsers } from '../routes/api';

const actionTypes = {
  SET_EVENT_DATA: 'SET_EVENT_DATA',
  SET_BUSINESS_DATA: 'SET_BUSINESS_DATA',
  SET_USER_DATA: 'SET_USER_DATA',
  TOGGLE_USER_MODAL: 'TOGGLE_USER_MODAL',
  OPEN_VENUE_MODAL: 'OPEN_VENUE_MODAL',
  CLOSE_VENUE_MODAL: 'CLOSE_VENUE_MODAL',
  OPEN_USER_ADD_VENUE: 'OPEN_USER_ADD_VENUE',
  CLOSE_USER_ADD_VENUE: 'CLOSE_USER_ADD_VENUE',
  SET_COPIED: 'SET_COPIED',
  SET_LOGIN_MODAL_TYPE: 'SET_LOGIN_MODAL_TYPE',
  SET_LOGIN_MODAL_VISBILITY: 'SET_LOGIN_MODAL_VISBILITY',
  SET_VENUE_TYPE: 'SET_VENUE_TYPE',
  // ... Add other actions as needed
};


// Reducer Function
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_EVENT_DATA:
      return { ...state, eventData: action.payload };

    case actionTypes.SET_BUSINESS_DATA:
      return { ...state, businessData: action.payload };

    case actionTypes.SET_USER_DATA:
      return { ...state, userData: action.payload };

    case actionTypes.TOGGLE_USER_MODAL:
      return { ...state, isUserModalOpen: !state.isUserModalOpen };

    case actionTypes.OPEN_VENUE_MODAL:
      return { ...state, isVenueModalOpen: true };

    case actionTypes.CLOSE_VENUE_MODAL:
      return { ...state, isVenueModalOpen: false };

    case actionTypes.OPEN_USER_ADD_VENUE:
      return { ...state, isUserAddVenueOpen: true };

    case actionTypes.CLOSE_USER_ADD_VENUE:
      return { ...state, isUserAddVenueOpen: false };

    case actionTypes.SET_COPIED:
      return { ...state, isCopied: action.payload };

    case actionTypes.SET_LOGIN_MODAL_TYPE:
      return { ...state, loginModalType: action.payload };

    case actionTypes.SET_LOGIN_MODAL_VISBILITY:
      return { ...state, isLoginModalVisible: action.payload };

    case actionTypes.SET_VENUE_TYPE:
      return { ...state, venueType: action.payload };

    // ... Add other cases as needed
    default:
      return state;
  }
};


export default function useApplication() {
  const [state, dispatch] = useReducer(reducer, {
    eventData: [],
    businessData: [],
    userData: [],
    isUserModalOpen: false,
    isVenueModalOpen: false,
    isUserAddVenueOpen: false,
    isCopied: false,
    loginModalType: null,
    isLoginModalVisible: false,
    venueType: null,
  });

  useEffect(() => {
    Promise.all([getAllEvents(), getAllBusinesses(), getAllUsers()])
      .then(([eventData, businessData, userData]) => {
        dispatch({ type: actionTypes.SET_EVENT_DATA, payload: eventData.data });
        dispatch({
          type: actionTypes.SET_BUSINESS_DATA,
          payload: businessData.data,
        });
        dispatch({ type: actionTypes.SET_USER_DATA, payload: userData.data });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // User modal opening and closing logic
  const toggleUserModal = () => {
    dispatch({ type: actionTypes.TOGGLE_USER_MODAL });
  };

  // Venue details modal opening and closing logic
  // Remember that I put part of the toggle logic in the nav bar.

  const openVenueModal = () => {
    dispatch({ type: actionTypes.OPEN_VENUE_MODAL });
  };

  const closeVenueModal = () => {
    dispatch({ type: actionTypes.CLOSE_VENUE_MODAL });
  };

  // UserAdd modal opening and closing logic
  const openUserAddVenue = () => {
    dispatch({ type: actionTypes.OPEN_USER_ADD_VENUE });
  };

  const closeUserAddVenue = () => {
    dispatch({ type: actionTypes.CLOSE_USER_ADD_VENUE });
  };

  // Copy to clipboard script logic
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    dispatch({ type: actionTypes.SET_COPIED, payload: true });
    setTimeout(() => dispatch({ type: actionTypes.SET_COPIED, payload: false }), 3000);
  };

  // Login/Registration modal logic
  const openLoginModal = (type) => {
    dispatch({ type: actionTypes.SET_LOGIN_MODAL_TYPE, payload: type });
    dispatch({ type: actionTypes.SET_LOGIN_MODAL_VISBILITY, payload: true });
  };

  const closeLoginModal = () => {
    dispatch({ type: actionTypes.SET_LOGIN_MODAL_VISBILITY, payload: false });
    dispatch({ type: actionTypes.SET_LOGIN_MODAL_TYPE, payload: null });
  };

  // Marker venue type
  // const [venueType, setVenueType] = useState(null);
  const setVenueType = (type) => {
    dispatch({ type: actionTypes.SET_VENUE_TYPE, payload: type });
  };

  return {
    state,
    toggleUserModal,
    openVenueModal,
    closeVenueModal,
    openUserAddVenue,
    closeUserAddVenue,
    handleCopy,
    openLoginModal,
    closeLoginModal,
    setVenueType
  };
}