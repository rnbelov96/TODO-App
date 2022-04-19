import { TODOType } from '@/types/general-types';

export default (todos: TODOType[], TODOid: string): TODOType[] => {
  const newTodo = [...todos];
  const index = newTodo.findIndex(el => el.id === TODOid);
  newTodo[index].done = !newTodo[index].done;
  return newTodo;
};
