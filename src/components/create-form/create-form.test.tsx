import React from 'react';
import renderer from 'react-test-renderer';
import { PureCreateForm } from './create-form';

describe('CreateForm', () => {
  test('should render create form', () => {
    const tree = renderer
      .create(
        <PureCreateForm
          inputText="Some text"
          onSubmit={() => {}}
          onChange={() => {}}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
