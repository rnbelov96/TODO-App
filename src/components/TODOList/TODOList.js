import React from 'react';
import { connect } from "react-redux";
import { changeTodoStatus, deleteTodo } from '../../redux/actions/actions';

function TODOList(props) {
  let todosToShow = [...props.todos];
  if (props.filterBy !== 'all') {
    if (props.filterBy === 'active') {
      todosToShow = todosToShow.filter(el => !el.done)
    }
    if (props.filterBy === 'completed') {
      todosToShow = todosToShow.filter(el => el.done)
    }
  }
  return (
    todosToShow.map(el => {
      return (
        <div className={el.done ? "todoItem todoItem_done" : "todoItem"} key={el.id}>
          <input checked={el.done} onChange={() => props.onChange(el.id)} type="checkbox" />
          {el.text}
          <span onClick={() => props.onDelete(el.id)} className="todoItem__deleteButton">x</span>
        </div>
      )
    })
  )
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    filterBy: state.filterBy
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: (id) => dispatch(changeTodoStatus(id)),
    onDelete: (id) => dispatch(deleteTodo(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TODOList)