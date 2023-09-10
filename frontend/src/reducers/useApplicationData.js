import { useEffect, useReducer } from 'react';
import {
  getAllEvents,
  getAllBusinesses,
  getBusinessCategories,
  getEventCategories
} from '../routes/api';

const actionTypes = {
  SET_EVENT_DATA: 'SET_EVENT_DATA',
  SET_EVENT_CATEGORY_DATA: 'SET_EVENT_CATEGORY_DATA',
  SET_BUSINESS_CATEGORY_DATA: 'SET_BUSINESS_CATEGORY_DATA',
  SET_BUSINESS_DATA: 'SET_BUSINESS_DATA',
  SET_USER_DATA: 'SET_USER_DATA',
  TOGGLE_USER_MODAL: 'TOGGLE_USER_MODAL',
  OPEN_USER_MODAL: 'OPEN_USER_MODAL',
  CLOSE_USER_MODAL: 'CLOSE_USER_MODAL',
  OPEN_VENUE_MODAL: 'OPEN_VENUE_MODAL',
  CLOSE_VENUE_MODAL: 'CLOSE_VENUE_MODAL',
  OPEN_USER_ADD_VENUE: 'OPEN_USER_ADD_VENUE',
  CLOSE_USER_ADD_VENUE: 'CLOSE_USER_ADD_VENUE',
  SET_COPIED: 'SET_COPIED',
  SET_LOGIN_MODAL_TYPE: 'SET_LOGIN_MODAL_TYPE',
  SET_LOGIN_MODAL_VISBILITY: 'SET_LOGIN_MODAL_VISBILITY',
  SET_VENUE_TYPE: 'SET_VENUE_TYPE',
  SET_SELECTED_FILTER: 'SET_SELECTED_FILTER',
  SET_USER: 'SET_USER',
  SET_LOADING: "SET_LOADING",
  CLEAR_LOADING: "CLEAR_LOADING"
};


// Reducer Function
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_EVENT_DATA:
      return { ...state, eventData: action.payload };

    case actionTypes.SET_EVENT_CATEGORY_DATA:
      return { ...state, eventCategoryData: action.payload };

    case actionTypes.SET_BUSINESS_CATEGORY_DATA:
      return { ...state, businessCategoryData: action.payload };

    case actionTypes.SET_BUSINESS_DATA:
      return { ...state, businessData: action.payload };

    case actionTypes.TOGGLE_USER_MODAL:
      return { ...state, isUserModalOpen: !state.isUserModalOpen };

    case actionTypes.OPEN_USER_MODAL:
      return { ...state, isUserModalOpen: true };

    case actionTypes.CLOSE_USER_MODAL:
      return { ...state, isUserModalOpen: false };

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

    case actionTypes.SET_SELECTED_FILTER:
      return { ...state, selectedFilter: action.payload };

    case actionTypes.SET_LOADING:
      return { ...state, isLoading: true };

    case actionTypes.CLEAR_LOADING:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};

export default function useApplication() {
  const [state, dispatch] = useReducer(reducer, {
    eventData: [],
    businessData: [],
    eventCategoryData: [],
    businessCategoryData: [],
    isUserModalOpen: false,
    isVenueModalOpen: false,
    isUserAddVenueOpen: false,
    isCopied: false,
    loginModalType: null,
    isLoginModalVisible: false,
    venueType: null,
    selectedFilter: '',
    isLoading: true,
  });

  useEffect(() => {
    Promise.all([getAllEvents(), getAllBusinesses(),getBusinessCategories(),getEventCategories()])
      .then(([eventData, businessData, businessCategoryData,eventCategoryData]) => {
        dispatch({ type: actionTypes.SET_EVENT_DATA, payload: eventData.data });
        dispatch({
          type: actionTypes.SET_BUSINESS_DATA,
          payload: businessData.data,
        });
        dispatch({ type: actionTypes.SET_EVENT_CATEGORY_DATA, payload: eventCategoryData.data });
        dispatch({ type: actionTypes.SET_BUSINESS_CATEGORY_DATA, payload: businessCategoryData.data });
        dispatch({ type: actionTypes.CLEAR_LOADING });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        dispatch({ type: actionTypes.CLEAR_LOADING });
      });
  }, []);

  /* This is here for debuggin isUserModalOpen, please DON'T REMOVE */
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     console.log('state.isUserModalOpen:', state.isUserModalOpen);
  //   }, 1000);
  
  //   // Clear interval when the component unmounts
  //   return () => clearInterval(intervalId);
  // }, [state.isUserModalOpen]);


  // User modal opening and closing logic
  const toggleUserModal = () => {
    dispatch({ type: actionTypes.TOGGLE_USER_MODAL });
  };

  const openUserModal = () => {
    dispatch({ type: actionTypes.OPEN_USER_MODAL });
  };

  const closeUserModal = () => {
    dispatch({ type: actionTypes.CLOSE_USER_MODAL });
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

    /* This is here for debuggin isUserModalOpen, please DON'T REMOVE */
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     console.log('isLoginModalVisible:', state.isLoginModalVisible);
  //   }, 1000);
  
  //   // Clear interval when the component unmounts
  //   return () => clearInterval(intervalId);
  // }, [state.isLoginModalVisible]);

  const closeLoginModal = () => {
    // console.log(`running from within closeLoginModal in useAppData`);
    dispatch({ type: actionTypes.SET_LOGIN_MODAL_VISBILITY, payload: false });
    dispatch({ type: actionTypes.SET_LOGIN_MODAL_TYPE, payload: null });
  };

  // Marker venue type
  const setVenueType = (type) => {
    dispatch({ type: actionTypes.SET_VENUE_TYPE, payload: type });
  };

  const handleButtonClick = (buttonType) => {
    if (state.selectedFilter === buttonType) {
      dispatch({ type: actionTypes.SET_SELECTED_FILTER, payload: '' });
    } else {
      dispatch({ type: actionTypes.SET_SELECTED_FILTER, payload: buttonType });
    }
  };

  // Loading

  const setLoading = () => {
    dispatch({ type: actionTypes.SET_LOADING });
  };

  const clearLoading = () => {
    dispatch({ type: actionTypes.CLEAR_LOADING });
  };

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    // console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }} key={item.id}>{item.name}</span>
      </>
    )
  }

  return {
    state,
    toggleUserModal,
    openUserModal,
    closeUserModal,
    openVenueModal,
    closeVenueModal,
    openUserAddVenue,
    closeUserAddVenue,
    handleCopy,
    openLoginModal,
    closeLoginModal,
    setVenueType,
    handleButtonClick,
    handleOnSearch,
    handleOnHover, 
    handleOnSelect,
    handleOnFocus, 
    formatResult,
    setLoading,
    clearLoading,
  };
}