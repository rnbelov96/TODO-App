import { FullStateType } from './types/general-types';

const enum FilterStatus {
  ALL = 'ALL',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
}

export const mockFullInitiateState: FullStateType = {
  app: {
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
    filterBy: FilterStatus.COMPLETED,
  },
};

export default FilterStatus;
