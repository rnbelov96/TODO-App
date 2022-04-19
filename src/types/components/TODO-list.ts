import { TODOType } from '../general-types';

export type TODOListPropsType = {
  todosToShow: TODOType[];
  onChange: (id: string) => void;
  onDelete: (id: string) => void;
};
