import { TODOType } from '@/types/general-types';
import { v4 as uuidv4 } from 'uuid';

export default (todos: TODOType[], TODOText: string): TODOType[] => {
  const newTodo = [...todos];
  newTodo.push({
    text: TODOText,
    done: false,
    id: uuidv4(),
  });
  return newTodo;
};
