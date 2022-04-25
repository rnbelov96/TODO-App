import FilterStatus, { mockFullInitiateState } from '@/contstants';
import React from 'react';
import renderer from 'react-test-renderer';
import { PureControlPanel } from './control-panel';

describe('ControlPanel', () => {
  test('should render control panel', () => {
    const tree = renderer
      .create(
        <PureControlPanel
          filterBy={FilterStatus.ALL}
          onDeleteCompleted={() => {}}
          onSwitch={() => {}}
          todos={mockFullInitiateState.app.todos}
          unfinishedTODOCount={1}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
