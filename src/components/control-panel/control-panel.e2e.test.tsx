import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilterStatus, { mockFullInitiateState } from '@/contstants';
import { PureControlPanel } from './control-panel';

configure({
  adapter: new Adapter(),
});

test('onSwitch gets correct data', () => {
  const onSwitch = jest.fn();

  const controlPanel = mount(
    <PureControlPanel
      filterBy={FilterStatus.ALL}
      onDeleteCompleted={() => {}}
      onSwitch={onSwitch}
      todos={mockFullInitiateState.app.todos}
      unfinishedTODOCount={1}
    />,
  );

  const allSwitchButtonEl = controlPanel.find('button').first();

  allSwitchButtonEl.simulate('click');

  expect(onSwitch).toHaveBeenCalledWith(FilterStatus.ALL);
});

test('onDeleteCompeted works properly', () => {
  const onDeleteCompeted = jest.fn();

  const controlPanel = mount(
    <PureControlPanel
      filterBy={FilterStatus.ALL}
      onDeleteCompleted={onDeleteCompeted}
      onSwitch={() => {}}
      todos={mockFullInitiateState.app.todos}
      unfinishedTODOCount={1}
    />,
  );

  const deleteCompletedButtonEl = controlPanel.find('button').last();

  deleteCompletedButtonEl.simulate('click');

  expect(onDeleteCompeted).toHaveBeenCalledTimes(1);
});
