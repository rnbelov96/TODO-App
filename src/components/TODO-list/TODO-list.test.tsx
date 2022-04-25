import { mockFullInitiateState } from '@/contstants';
import React from 'react';
import renderer from 'react-test-renderer';
import { PureTODOList } from './TODO-list';

describe('TODOList', () => {
  test('should render todo list', () => {
    const tree = renderer
      .create(
        <PureTODOList
          todosToShow={mockFullInitiateState.app.todos}
          onChange={() => {}}
          onDelete={() => {}}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
