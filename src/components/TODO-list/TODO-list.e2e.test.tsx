import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mockFullInitiateState } from '@/contstants';
import { PureTODOList } from './TODO-list';

configure({
  adapter: new Adapter(),
});

test('onChange gets correct data', () => {
  const onChange = jest.fn();

  const TODOList = mount(
    <PureTODOList
      todosToShow={mockFullInitiateState.app.todos}
      onChange={onChange}
      onDelete={() => {}}
    />,
  );

  const checkboxEl = TODOList.find('input').first();

  checkboxEl.simulate('change', { target: { value: mockFullInitiateState.app.todos[0].id } });

  expect(onChange).toHaveBeenCalledWith(mockFullInitiateState.app.todos[0].id);
});

test('onDelete gets correct data', () => {
  const onDelete = jest.fn();

  const TODOList = mount(
    <PureTODOList
      todosToShow={mockFullInitiateState.app.todos}
      onChange={() => {}}
      onDelete={onDelete}
    />,
  );

  const deleteBtnEl = TODOList.find('button').first();

  deleteBtnEl.simulate('click');

  expect(onDelete).toHaveBeenCalledWith(mockFullInitiateState.app.todos[0].id);
});
