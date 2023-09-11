import { actionTypes } from './actionTypes';

export const reducer = (state, action) => {
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
      // If the modal is currently closed (thus, about to be opened), close other modals first.
      if (!state.isUserModalOpen) {
        const newState = {
          ...state,
          isUserModalOpen: true,
          isVenueModalOpen: false,
          isUserAddVenueOpen: false,
          isLoginRegModalOpen: false,
          isVenueManagerModalOpen: false,
          // add other modals to close similarly
        };
        return newState;
      }

      // If the modal is currently open, just close it.
      return { ...state, isUserModalOpen: false };

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
      return { ...state, isLoginRegModalOpen: action.payload };

    case actionTypes.SET_SELECTED_FILTER:
      return { ...state, selectedFilter: action.payload };

    case actionTypes.SET_LOADING:
      return { ...state, isLoading: true };

    case actionTypes.CLEAR_LOADING:
      return { ...state, isLoading: false };

    case actionTypes.SET_SELECTED_VENUE:
      return {
        ...state,
        selectedVenueType: action.payload.venueType,
        selectedVenueId: action.payload.venueId,
      };

    case actionTypes.RESET_SELECTED_VENUE:
      return {
        ...state,
        selectedVenueType: null,
        selectedVenueId: null,
      };

    case actionTypes.SET_SELECTED_ITEM:
      return { ...state, selectedSearchResult: action.payload };

    case actionTypes.RESET_SELECTED_ITEM:
      return { ...state, selectedSearchResult: "" };

    case actionTypes.OPEN_VENUE_MANAGER_MODAL:
      return { ...state, isVenueManagerModalOpen: true };

    case actionTypes.CLOSE_VENUE_MANAGER_MODAL:
      return { ...state, isVenueManagerModalOpen: false };

    case actionTypes.TOGGLE_ONLY_MODAL:
      return {
        ...state,
        isUserModalOpen: action.modalName === "isUserModalOpen",
        isVenueModalOpen: action.modalName === "isVenueModalOpen",
        isUserAddVenueOpen: action.modalName === "isUserAddVenueOpen",
        isLoginRegModalOpen: action.modalName === "isLoginRegModalOpen",
        isVenueManagerModalOpen: action.modalName === "isVenueManagerModalOpen",
        // add other modals similarly
      };

    case actionTypes.DELETE_BUSINESS_BY_ID:
      return {
        ...state,
        businessData: state.businessData.filter(
          (business) => business.id !== action.payload
        ),
      };

    case actionTypes.DELETE_EVENT_BY_ID:
      return {
        ...state,
        eventData: state.eventData.filter(
          (event) => event.id !== action.payload
        ),
      };

    default:
      return state;
  }
};