import { ApplicationState } from './types';
import { Action, ActionTypes } from './types/actionTypes';
import initialState from './initialState';

const reducer = (state = initialState, action: Action): ApplicationState => {
  switch (action.type) {
    case ActionTypes.ToggleSidebar: {
      return {...state, isSidebarOpen: !state.isSidebarOpen};
    }
    case ActionTypes.PushForm: {
      const tempArray = state.form;
      console.log(tempArray);
      tempArray.push(action.payload);
      return {...state, form: [...tempArray]}
    }
    default: {
      return state;
    }
  }
};
export default reducer;
