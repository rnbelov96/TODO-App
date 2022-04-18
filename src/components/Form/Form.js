import { AppActionCreators } from '@/redux/app';
import React from 'react';
import { connect } from 'react-redux';

function Form(props) {
  return (
    <form
      className="form"
      onSubmit={e => {
        e.preventDefault();
        props.OnSubmit();
      }}
    >
      <input
        placeholder="What needs to be done?"
        onChange={e => {
          props.onChange(e.target.value);
        }}
        value={props.inputText}
        type="text"
      />
    </form>
  );
}

function mapStateToProps(state) {
  return {
    inputText: state.app.inputText,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: data => dispatch(AppActionCreators.changeInput(data)),
    OnSubmit: () => dispatch(AppActionCreators.submit()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
