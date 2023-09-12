import { actionTypes } from './actionTypes';

export const modalFunctions = (dispatch, state) => {

  /* TOGGLE ONLY MODAL */
  /* This function closes all the other modal that are opened when a new modal is opened */
  const toggleOnlyModal = (modalName) => {
    dispatch({ type: actionTypes.TOGGLE_ONLY_MODAL, modalName });
  };

  /* USER MODAL */

  /* This is here for debuggin isUserModalOpen, please DON'T REMOVE */
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     console.log('state.isUserModalOpen:', state.isUserModalOpen);
  //   }, 1000);

  //   // Clear interval when the component unmounts
  //   return () => clearInterval(intervalId);
  // }, [state.isUserModalOpen]);

  // const toggleUserModal = () => {
  //   dispatch({ type: actionTypes.TOGGLE_USER_MODAL });
  // };

  const toggleUserModal = () => {
    if (state.isUserModalOpen) {
      // console.log("User modal is currently open.");
      // console.log('state.isUserModalOpen', state.isUserModalOpen);
    } 
    
    if (!state.isUserModalOpen) {
      // console.log("User modal is currently closed.");
      // console.log('state.isUserModalOpen', state.isUserModalOpen);
    }

    dispatch({ type: actionTypes.TOGGLE_USER_MODAL });
  };
  

  const openUserModal = () => {
    toggleOnlyModal("isUserModalOpen");
    dispatch({ type: actionTypes.OPEN_USER_MODAL });
  };

  const closeUserModal = () => {
    dispatch({ type: actionTypes.CLOSE_USER_MODAL });
  };

  /* VENUE MODAL */
  /* Venue details modal opening and closing logic */
  const setSelectedVenue = (venueType, venueId) => {
    dispatch({
      type: actionTypes.SET_SELECTED_VENUE,
      payload: { venueType, venueId },
    });
    dispatch({ type: actionTypes.OPEN_VENUE_MODAL });
  };

  const closeVenueModal = () => {
    dispatch({ type: actionTypes.CLOSE_VENUE_MODAL });
    dispatch({ type: actionTypes.RESET_SELECTED_VENUE });
  };

  /* USER ADD VENUE MODAL */
  const openUserAddVenue = () => {
    toggleOnlyModal("isUserAddVenueOpen");
    dispatch({ type: actionTypes.OPEN_USER_ADD_VENUE });
  };

  const closeUserAddVenue = () => {
    dispatch({ type: actionTypes.CLOSE_USER_ADD_VENUE });
  };

  /* LOG-IN/REGISTRATION MODAL */
  const openLoginModal = (type) => {
    toggleOnlyModal("isLoginRegModalOpen");
    dispatch({ type: actionTypes.SET_LOGIN_MODAL_TYPE, payload: type });
    dispatch({ type: actionTypes.SET_LOGIN_MODAL_VISBILITY, payload: true });
  };

  /* This is here for debuggin isUserModalOpen, please DON'T REMOVE */
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     console.log('isLoginRegModalOpen:', state.isLoginRegModalOpen);
  //   }, 1000);

  //   // Clear interval when the component unmounts
  //   return () => clearInterval(intervalId);
  // }, [state.isLoginRegModalOpen]);

  const closeLoginModal = () => {
    // console.log(`running from within closeLoginModal in useAppData`);
    dispatch({ type: actionTypes.SET_LOGIN_MODAL_VISBILITY, payload: false });
    dispatch({ type: actionTypes.SET_LOGIN_MODAL_TYPE, payload: null });
  };

  /* VENUE MANAGER MODAL FUNCTIONS */
  const openVenueManagerModal = () => {
    toggleOnlyModal("isVenueManagerModalOpen");
    dispatch({ type: actionTypes.OPEN_VENUE_MANAGER_MODAL });
  };

  const closeVenueManagerModal = () => {
    dispatch({ type: actionTypes.CLOSE_VENUE_MANAGER_MODAL });
  };

  /* USER EDIT VENUE FUNCTIONS */

  const openUserEditVenueModal = () => {
    toggleOnlyModal("isUserEditVenueModalOpen");
    // dispatch({
    //   type: actionTypes.SET_SELECTED_VENUE,
    //   payload: { venueType, venueId },
    // });
    dispatch({ type: actionTypes.OPEN_USER_EDIT_VENUE_MODAL });
  };

  const closeUserEditVenueModal = () => {
    toggleOnlyModal("isVenueManagerModalOpen");
    dispatch({ type: actionTypes.CLOSE_USER_EDIT_VENUE_MODAL });
    // dispatch({ type: actionTypes.RESET_SELECTED_VENUE });
  };


  return {
    toggleUserModal,
    openUserModal,
    closeUserModal,
    setSelectedVenue,
    closeVenueModal,
    openUserAddVenue,
    closeUserAddVenue,
    openLoginModal,
    closeLoginModal,
    openVenueManagerModal,
    closeVenueManagerModal,
    openUserEditVenueModal,
    closeUserEditVenueModal,
  };
}