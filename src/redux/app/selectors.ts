import FilterStatus from '@/contstants';
import { FullStateType } from '@/types/general-types';
import { createSelector } from 'reselect';

export const getFilterStatus = (state: FullStateType) => state.app.filterBy;

export const getUnfinishedTODOCount = (state: FullStateType) => state.app.todos.filter(el => !el.done).length;

export const getAllTODOS = (state: FullStateType) => state.app.todos;

export const getTODOSToShow = createSelector(getAllTODOS, getFilterStatus, (todos, filterBy) => {
  switch (filterBy) {
    case FilterStatus.ALL:
      return todos;

    case FilterStatus.ACTIVE:
      return todos.filter(el => !el.done);

    case FilterStatus.COMPLETED:
      return todos.filter(el => el.done);
    default:
      return todos;
  }
});
