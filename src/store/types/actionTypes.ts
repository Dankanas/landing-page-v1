import { Form } from "./applicationState";

export interface ToggleSidebar {
  type: ActionTypes.ToggleSidebar;
  payload: null;
}

export interface PushForm {
  type: ActionTypes.PushForm
  payload: Form;
}

export enum ActionTypes {
  ToggleSidebar = 'TOGGLE_SIDEBAR',
  PushForm = 'PUSH_FORM'
}

export type Action = ToggleSidebar | PushForm;


