import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { PureCreateForm } from './create-form';

configure({
  adapter: new Adapter(),
});

test('onSubmit works properly', () => {
  const onSubmit = jest.fn();

  const CreateForm = mount(
    <PureCreateForm
      inputText="Some text"
      onSubmit={onSubmit}
      onChange={() => {}}
    />,
  );

  const formEl = CreateForm.find('form');

  formEl.simulate('submit', {
    preventDefault: () => {},
  });

  expect(onSubmit).toHaveBeenCalledTimes(1);
});

test('onChange gets correct data', () => {
  const onChange = jest.fn();

  const CreateForm = mount(
    <PureCreateForm
      inputText="Some text"
      onSubmit={() => {}}
      onChange={onChange}
    />,
  );

  const inputEl = CreateForm.find('input');

  inputEl.simulate('change', {
    target: { value: 'Some new text' },
  });

  expect(onChange).toHaveBeenCalledWith('Some new text');
});
