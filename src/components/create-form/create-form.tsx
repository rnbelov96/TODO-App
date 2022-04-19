import { AppActionCreators } from '@/redux/app';
import { FormPropsType } from '@/types/components/form';
import { FullStateType } from '@/types/general-types';
import { AppActionType } from '@/types/redux/app-reducer';
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export const PureCreateForm: React.FunctionComponent<FormPropsType> = ({
  inputText,
  onSubmit,
  onChange,
}) => (
  <form
    className="form"
    onSubmit={e => {
      e.preventDefault();
      onSubmit();
    }}
  >
    <input
      placeholder="What needs to be done?"
      onChange={e => {
        onChange(e.target.value);
      }}
      value={inputText}
      type="text"
    />
  </form>
);

function mapStateToProps(state: FullStateType) {
  return {
    inputText: state.app.inputText,
  };
}

function mapDispatchToProps(dispatch: Dispatch<AppActionType>) {
  return {
    onChange: (data: string) => dispatch(AppActionCreators.changeInput(data)),
    onSubmit: () => dispatch(AppActionCreators.submit()),
  };
}

export const CreateForm = connect(mapStateToProps, mapDispatchToProps)(PureCreateForm);
