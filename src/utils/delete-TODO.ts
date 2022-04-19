import { TODOType } from '@/types/general-types';

export default (todos: TODOType[], TODOid: string): TODOType[] => [...todos].filter(el => el.id !== TODOid);
