import { TODOType } from '@/types/general-types';

export default (todos: TODOType[], TODOid: string): TODOType[] => {
  const newTodo = [...todos];
  const index = newTodo.findIndex(el => el.id === TODOid);
  newTodo.splice(index, 1);
  return newTodo;
};
