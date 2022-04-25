import FilterStatus, { mockFullInitiateState } from '@/contstants';
import { AppActionCreators, appReducer } from './app-reducer';

describe('Reducer', () => {
  test('should change input', () => {
    expect(
      appReducer(
        mockFullInitiateState.app,
        AppActionCreators.changeInput('Some input'),
      ),
    ).toEqual({ ...mockFullInitiateState.app, inputText: 'Some input' });
  });

  test('should submit and create new TODO', () => {
    const newState = appReducer(
      { ...mockFullInitiateState.app, inputText: 'Some input' },
      AppActionCreators.submit(),
    );
    expect(newState.todos.length).toBe(
      mockFullInitiateState.app.todos.length + 1,
    );
    expect(newState.todos[newState.todos.length - 1].text).toBe('Some input');
  });

  test('should change TODO status', () => {
    const newState = appReducer(
      mockFullInitiateState.app,
      AppActionCreators.changeTodoStatus(mockFullInitiateState.app.todos[0].id),
    );
    expect(newState.todos[0].done).toBe(
      !mockFullInitiateState.app.todos[0].done,
    );
  });

  test('should delete TODO', () => {
    const newState = appReducer(
      mockFullInitiateState.app,
      AppActionCreators.deleteTODO(mockFullInitiateState.app.todos[0].id),
    );
    expect(newState.todos.length).toBe(
      mockFullInitiateState.app.todos.length - 1,
    );
  });

  test('should delete all completed TODO', () => {
    const newState = appReducer(
      mockFullInitiateState.app,
      AppActionCreators.deleteCompletedTODO(),
    );
    expect(newState.todos.length).toBe(
      mockFullInitiateState.app.todos.length - 1,
    );
  });

  test('should switch filter', () => {
    const newState = appReducer(
      mockFullInitiateState.app,
      AppActionCreators.switchFilter(FilterStatus.ACTIVE),
    );
    expect(newState.filterBy).toBe(FilterStatus.ACTIVE);
  });
});
