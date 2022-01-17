export interface ToggleSidebar {
  type: ActionTypes.ToggleSidebar;
  payload: null;
}

export enum ActionTypes {
  ToggleSidebar = 'TOGGLE_SIDEBAR'
}

export type Action = ToggleSidebar;


