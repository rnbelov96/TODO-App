import { AppActionCreators } from '@/redux/app';
import { getFilterStatus, getTODOSToShow } from '@/redux/app/selectors';
import React from 'react';
import { connect } from 'react-redux';

function TODOList(props) {
  return props.todosToShow.map(el => (
    <div
      className={el.done ? 'todoItem todoItem_done' : 'todoItem'}
      key={el.id}
    >
      <input
        checked={el.done}
        onChange={() => props.onChange(el.id)}
        type="checkbox"
      />
      {el.text}
      <span
        onClick={() => props.onDelete(el.id)}
        className="todoItem__deleteButton"
      >
        x
      </span>
    </div>
  ));
}

function mapStateToProps(state) {
  return {
    todosToShow: getTODOSToShow(state),
    filterBy: getFilterStatus(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: id => dispatch(AppActionCreators.changeTodoStatus(id)),
    onDelete: id => dispatch(AppActionCreators.deleteTODO(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TODOList);
