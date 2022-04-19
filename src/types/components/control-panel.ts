import FilterStatus from '@/contstants';
import { TODOType } from '../general-types';

export type ControlPanelPropsType = {
  unfinishedTODOCount: number;
  filterBy: FilterStatus;
  todos: TODOType[];
  onSwitch: (value: FilterStatus) => void;
  onDeleteCompleted: () => void;
};
