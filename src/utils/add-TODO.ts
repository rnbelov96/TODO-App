import { TODOType } from '@/types/general-types';
import uuidv4 from 'uuid/v4';

export default (todos: TODOType[], TODOText: string): TODOType[] => {
  const newTodo = [...todos];
  newTodo.push({
    text: TODOText,
    done: false,
    id: uuidv4(),
  });
  return newTodo;
};
