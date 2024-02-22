// redux/store.js
import { createStore } from 'redux';

// Action types
export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';

// Reducer
const initialState = {
  isDarkmode: JSON.parse(localStorage.getItem('isDarkmode')) || false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      const newState = {
        ...state,
        isDarkmode: !state.isDarkmode,
      };
      localStorage.setItem('isDarkmode', JSON.stringify(newState.isDarkmode));
      return newState;
    default:
      return state;
  }
};

// Store
const store = createStore(rootReducer);

export default store;
