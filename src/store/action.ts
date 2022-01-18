import store from './store';
import { ActionTypes } from './types/actionTypes';
import { Form } from './types/applicationState';

export const ToggleSidebar = (payload: null): void => {
  store.dispatch({ type: ActionTypes.ToggleSidebar, payload: payload});
};

export const PushForm = (payload: Form) => {
  store.dispatch({ type: ActionTypes.PushForm, payload: payload});
};
