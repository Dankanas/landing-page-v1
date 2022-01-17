import store from './store';
import { ActionTypes } from './types/actionTypes';

export const ToggleSidebar = (payload: null): void => {
  store.dispatch({ type: ActionTypes.ToggleSidebar, payload: payload});
};
