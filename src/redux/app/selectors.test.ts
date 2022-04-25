import { mockFullInitiateState } from '@/contstants';
import {
  getAllTODOS,
  getFilterStatus,
  getTODOSToShow,
  getUnfinishedTODOCount,
} from './selectors';

describe('Selector', () => {
  test('getFilterStatus should return filter status', () => {
    expect(getFilterStatus(mockFullInitiateState)).toBe(
      mockFullInitiateState.app.filterBy,
    );
  });

  test('getUnfinishedTODOCount should return unfinished TODO count', () => {
    expect(getUnfinishedTODOCount(mockFullInitiateState)).toBe(
      mockFullInitiateState.app.todos.filter(el => !el.done).length,
    );
  });

  test('getAllTODOS should return all TODOS', () => {
    expect(getAllTODOS(mockFullInitiateState)).toEqual(
      mockFullInitiateState.app.todos,
    );
  });

  test('getTODOSToShow should return TODOS to show', () => {
    expect(getTODOSToShow(mockFullInitiateState)).toEqual([
      {
        text: 'Call my friends',
        done: true,
        id: '6436c8b9-58c6-4e94-92f2-e4fac524a731',
      },
    ]);
  });
});
