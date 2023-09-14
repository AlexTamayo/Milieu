import { actionTypes } from "./actionTypes";

export const otherFunctions = (dispatch, state) => {
  
  /* COPY TO CLIPBOARD */
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    dispatch({ type: actionTypes.SET_COPIED, payload: true });
    setTimeout(
      () => dispatch({ type: actionTypes.SET_COPIED, payload: false }),
      3000
    );
  };

  /* FILTERS BASED ON SEARCH BUTTON */
  /* Sets selected filter based on the button clicked on top of the search bar */
  const handleButtonClick = (buttonType) => {
    if (state.selectedFilter === buttonType) {
      dispatch({ type: actionTypes.SET_SELECTED_FILTER, payload: "" });
    } else {
      dispatch({ type: actionTypes.SET_SELECTED_FILTER, payload: buttonType });
    }
  };

  /* SELECTED MAP MARKER */

  const setSelectedMarkerIndex = (index) => {
    dispatch({ type: actionTypes.SET_MARKER_INDEX, payload: index });
  };

  const clearSelectedMarkerIndex = () => {
    dispatch({ type: actionTypes.RESET_MARKER_INDEX });
  };


  /* LOADING */

  const setLoading = () => {
    dispatch({ type: actionTypes.SET_LOADING });
  };

  const clearLoading = () => {
    dispatch({ type: actionTypes.CLEAR_LOADING });
  };

  /* SEARCH INPUT */
  const handleOnSearch = (string, results) => {
    // console.log("handleOnSearch string", string);
    // console.log("handleOnSearch results", results);
    if (string === "") {
      dispatch({ type: actionTypes.RESET_SELECTED_ITEM });
    }
  };

  const handleOnHover = (result) => {
    // the item hovered
    // console.log("handleOnHover", result);
  };

  const handleOnSelect = (item) => {
    // console.log("handleOnSelect", item);
    dispatch({ type: actionTypes.SET_SELECTED_ITEM, payload: item.name });
  };

  const handleOnFocus = () => {
    // console.log('Focused')
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }} key={item.id}>
          {item.name}
        </span>
      </>
    );
  };

  return {
    handleCopy,
    handleButtonClick,
    setLoading,
    clearLoading,
    handleOnSearch,
    handleOnHover,
    handleOnSelect,
    handleOnFocus,
    formatResult,
    setSelectedMarkerIndex,
    clearSelectedMarkerIndex,
  };
};
