// set initialState of redux store here
const initialState = {
  darkMode: true,
};

// reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_DARKMODE":
      return {
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
}
