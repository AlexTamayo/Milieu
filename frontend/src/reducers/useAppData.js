import { useEffect, useReducer } from 'react';
import {
  getAllEvents,
  getAllBusinesses,
  getBusinessCategories,
  getEventCategories
} from '../routes/api';

import { actionTypes } from './actionTypes';
import { reducer } from './reducer';
import { databaseFunctions } from './databaseFunctions';
import { modalFunctions } from './modalFunctions';
import { otherFunctions } from './otherFunctions';

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
    isLoginRegModalOpen: false,
    selectedFilter: "",
    isLoading: true,
    searchResultCategory: {},
    selectedVenueType: null,
    selectedVenueId: null,
    selectedSearchResult: '',
    isVenueManagerModalOpen: false,
  });

  useEffect(() => {
    Promise.all([
      getAllEvents(),
      getAllBusinesses(),
      getBusinessCategories(),
      getEventCategories(),
    ])
      .then(
        ([
          eventData,
          businessData,
          businessCategoryData,
          eventCategoryData,
        ]) => {
          dispatch({
            type: actionTypes.SET_EVENT_DATA,
            payload: eventData.data,
          });
          dispatch({
            type: actionTypes.SET_BUSINESS_DATA,
            payload: businessData.data,
          });
          dispatch({
            type: actionTypes.SET_EVENT_CATEGORY_DATA,
            payload: eventCategoryData.data,
          });
          dispatch({
            type: actionTypes.SET_BUSINESS_CATEGORY_DATA,
            payload: businessCategoryData.data,
          });
          dispatch({ type: actionTypes.CLEAR_LOADING });
        }
      )
      .catch((error) => {
        console.error("Error fetching data:", error);
        dispatch({ type: actionTypes.CLEAR_LOADING });
      });
  }, []);
  
  const databaseFuncs = databaseFunctions(dispatch, state);

  const modalFuncs = modalFunctions(dispatch, state);

  const otherFuncs = otherFunctions(dispatch, state);
  


  return {
    state,
    ...databaseFuncs,
    ...modalFuncs,
    ...otherFuncs,
  };
}