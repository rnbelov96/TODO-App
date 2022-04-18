import FilterStatus from '@/contstants';
import {
  AppActionConstType,
  AppActionType,
  AppInitialStateType,
  ChangeInputActionType,
  ChangeTODOStatusActionType,
  DeleteCompletedTODOActionType,
  DeleteTODOActionType,
  SubmitActionType,
  SwitchFilterActionType,
} from '@/types/redux/app-reducer';
import addTODO from '@/utils/add-TODO';
import changeTODO from '@/utils/change-TODO';
import deleteCompletedTODOS from '@/utils/delete-completed-TODOS';
import deleteTODO from '@/utils/delete-TODO';

const initialState: AppInitialStateType = {
  todos: [
    {
      text: 'Go for a walk',
      done: false,
      id: '6436c8b9-58c6-4e94-92f2-e4fac524a729',
    },
    {
      text: 'Read the book',
      done: false,
      id: '6436c8b9-58c6-4e94-92f2-e4fac524a730',
    },
    {
      text: 'Call my friends',
      done: true,
      id: '6436c8b9-58c6-4e94-92f2-e4fac524a731',
    },
  ],
  inputText: '',
  filterBy: FilterStatus.ALL,
};

const ActionTypes: AppActionConstType = {
  CHANGE_INPUT: 'CHANGE_INPUT',
  SUBMIT: 'SUBMIT',
  CHANGE_TODO_STATUS: 'CHANGE_TODO_STATUS',
  DELETE_TODO: 'DELETE_TODO',
  SWITCH_FILTER: 'SWITCH_FILTER',
  DELETE_COMPLETED_TODO: 'DELETE_COMPLETED_TODO',
};

const ActionCreators = {
  changeInput: (data: string): ChangeInputActionType => ({
    type: ActionTypes.CHANGE_INPUT,
    payload: data,
  }),
  submit: (): SubmitActionType => ({
    type: ActionTypes.SUBMIT,
  }),
  changeTodoStatus: (id: string): ChangeTODOStatusActionType => ({
    type: ActionTypes.CHANGE_TODO_STATUS,
    payload: id,
  }),
  deleteTODO: (id: string): DeleteTODOActionType => ({
    type: ActionTypes.DELETE_TODO,
    payload: id,
  }),
  switchFilter: (value: FilterStatus): SwitchFilterActionType => ({
    type: ActionTypes.SWITCH_FILTER,
    payload: value,
  }),
  deleteCompletedTODO: (): DeleteCompletedTODOActionType => ({
    type: ActionTypes.DELETE_COMPLETED_TODO,
  }),
};

const reducer = (
  state: AppInitialStateType = initialState,
  action: AppActionType,
) => {
  switch (action.type) {
    case ActionTypes.CHANGE_INPUT:
      return {
        ...state,
        inputText: action.payload,
      };

    case ActionTypes.SUBMIT:
      return {
        ...state,
        todos: addTODO(state.todos, state.inputText),
        inputText: '',
      };

    case ActionTypes.CHANGE_TODO_STATUS:
      return {
        ...state,
        todos: changeTODO(state.todos, action.payload),
      };

    case ActionTypes.DELETE_TODO:
      return {
        ...state,
        todos: deleteTODO(state.todos, action.payload),
      };

    case ActionTypes.SWITCH_FILTER:
      return {
        ...state,
        filterBy: action.payload,
      };

    case ActionTypes.DELETE_COMPLETED_TODO:
      return {
        ...state,
        todos: deleteCompletedTODOS(state.todos),
      };
    default:
      return state;
  }
};

export {
  reducer as appReducer,
  ActionCreators as AppActionCreators,
  ActionTypes as AppActionTypes,
};
