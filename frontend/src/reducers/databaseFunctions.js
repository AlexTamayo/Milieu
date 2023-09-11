import { actionTypes } from "./actionTypes";
import { deleteBusinessById, deleteEventById } from '../routes/api';

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
  }
}
