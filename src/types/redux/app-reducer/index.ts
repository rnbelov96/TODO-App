import FilterStatus from '@/contstants';
import { TODOType } from '@/types/general-types';

export type AppInitialStateType = {
  todos: TODOType[];
  inputText: string;
  filterBy: FilterStatus;
};

export type AppActionConstType = {
  CHANGE_INPUT: 'CHANGE_INPUT';
  SUBMIT: 'SUBMIT';
  CHANGE_TODO_STATUS: 'CHANGE_TODO_STATUS';
  DELETE_TODO: 'DELETE_TODO';
  SWITCH_FILTER: 'SWITCH_FILTER';
  DELETE_COMPLETED_TODO: 'DELETE_COMPLETED_TODO';
};

export type ChangeInputActionType = {
  type: AppActionConstType['CHANGE_INPUT'];
  payload: string;
};

export type SubmitActionType = {
  type: AppActionConstType['SUBMIT'];
};

export type ChangeTODOStatusActionType = {
  type: AppActionConstType['CHANGE_TODO_STATUS'];
  payload: string;
};

export type DeleteTODOActionType = {
  type: AppActionConstType['DELETE_TODO'];
  payload: string;
};

export type SwitchFilterActionType = {
  type: AppActionConstType['SWITCH_FILTER'];
  payload: FilterStatus;
};

export type DeleteCompletedTODOActionType = {
  type: AppActionConstType['DELETE_COMPLETED_TODO'];
};

export type AppActionType =
  | ChangeInputActionType
  | SubmitActionType
  | ChangeTODOStatusActionType
  | DeleteTODOActionType
  | SwitchFilterActionType
  | DeleteCompletedTODOActionType;
