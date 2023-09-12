import { actionTypes } from "./actionTypes";
import { deleteBusinessById, deleteEventById,createBusiness,createEvent } from '../routes/api';

export const databaseFunctions = (dispatch, state) => {

/* DELETE BUSINESS BY ID */
const deleteBusiness = async (businessId) => {
  try {
    const response = await deleteBusinessById(businessId);
    if (response && response.status === 200) {
      dispatch({
        type: actionTypes.SET_BUSINESS_DATA,
        payload: state.businessData.filter(business => business.id !== businessId)
      });
      return { success: true };
    } else {
      dispatch({
        type: actionTypes.DELETE_ENTITY_FAILURE,
        payload: { error: "Deletion failed." }
      });
      return { success: false, error: "Deletion failed." };
    }
  } catch (error) {
    dispatch({
      type: actionTypes.DELETE_ENTITY_FAILURE,
      payload: { error: error.message }
    });
    return { success: false, error: error.message };
  }
};
///////
const createABusiness = async (data) => {
  try {
    const response = await createBusiness(data);
    if (response.status === 200 || response.status === 201) {
      dispatch({
        type: actionTypes.SET_BUSINESS_DATA,
        payload: [...state.businessData, response.data]
      });
      console.log('Business added successfully:', response.data);
      return { success: true };
    } else if (response.status === 400) {
      // Handle specific error cases (e.g., validation errors)
      console.error('Business creation failed due to validation errors:', response.data);
      return { success: false, error: "Validation error" };
    } else {
      // Handle other error cases
      console.error('Business creation failed with status code:', response.status);
      return { success: false, error: "Creation failed." };
    }
  } catch (error) {
    dispatch({
      type: actionTypes.CREATE_ENTITY_FAILURE,
      payload: { error: error.message }
    });
    console.error('Error creating business:', error);
    return { success: false, error: error.message };
  }
};

const createAnEvent = async (data) => {
  try {
    const response = await createEvent(data);
    if (response && response.status === 200) {
      dispatch({
        type: actionTypes.SET_EVENT_DATA,
        payload: [...state.eventData, response.data]
      });
      return { success: true };
    } else {
      dispatch({
        type: actionTypes.CREATE_ENTITY_FAILURE,
        payload: { error: "Deletion failed." }
      });
      return { success: false, error: "Deletion failed." };
    }
  } catch (error) {
    dispatch({
      type: actionTypes.CREATE_ENTITY_FAILURE,
      payload: { error: error.message }
    });
    return { success: false, error: error.message };
  }
};


/* DELETE EVENT BY ID */
const deleteEvent = async (eventId) => {
  try {
    const response = await deleteEventById(eventId);
    if (response && response.status === 200) {
      dispatch({
        type: actionTypes.SET_EVENT_DATA,
        payload: state.eventData.filter(event => event.id !== eventId)
      });
      return { success: true };
    } else {
      dispatch({
        type: actionTypes.DELETE_ENTITY_FAILURE,
        payload: { error: "Deletion failed." }
      });
      return { success: false, error: "Deletion failed." };
    }
  } catch (error) {
    dispatch({
      type: actionTypes.DELETE_ENTITY_FAILURE,
      payload: { error: error.message }
    });
    return { success: false, error: error.message };
  }
};


/* DELETE ENTITY BY ID (HAVE TO PROVIDE TYPE OF ENTITY) */
const deleteEntityById = async (entityId, entityType) => {
  try {
    switch (entityType) {
      case 'business':
        return deleteBusiness(entityId);
      case 'event':
        return deleteEvent(entityId);
      default:
        throw new Error('Unsupported entity type for deletion.');
    }
  } catch (error) {
    dispatch({
      type: actionTypes.DELETE_ENTITY_FAILURE,
      payload: { error: error.message }
    });
    return { success: false, error: error.message };
  }
};

  return {
    deleteEntityById,
    deleteBusiness,
    deleteEvent,
    createABusiness,
    createAnEvent

  }
}
