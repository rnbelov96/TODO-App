import { TODOType } from '@/types/general-types';

export default (todos: TODOType[]): TODOType[] => [...todos].filter(el => !el.done);
