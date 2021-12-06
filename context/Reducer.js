export const initialState = {
  language: true,
};
export const colorapp = "#FF0000";
export const actionTypes = {
  LANGUAGE: "LANGUAGE",
  
};

const reducer = (state, action) => {
  switch (action.type) {
      case actionTypes.LANGUAGE:
        return {
          ...state,
          language: action.language,
        };
  
    default:
      return state;
  }
};

export default reducer;
