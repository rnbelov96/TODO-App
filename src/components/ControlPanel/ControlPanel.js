import React from "react";
import { connect } from "react-redux";
import { switchFilter, deleteCompleted } from "../../redux/actions/actions";

function ControlPanel(props) {
  return (
    <div
      className="controlPanel"
      style={!!props.todos.length ? { display: "flex" } : { display: "none" }}
    >
      <div
        className="controlPanel__itemsLeft"
        style={props.show ? { opacity: 1 } : { opacity: 0 }}
      >{`${props.todos.reduce(
        (accum, el) => (!el.done ? ++accum : accum),
        0
      )} items left`}</div>
      <div className="controlPanel__groupButtons">
        <div
          className={
            props.filterBy === "all"
              ? "controlPanel__groupButton controlPanel__groupButton_active"
              : "controlPanel__groupButton"
          }
          onClick={() => props.onSwitch("all")}
        >
          All
        </div>
        <div
          className={
            props.filterBy === "active"
              ? "controlPanel__groupButton controlPanel__groupButton_active"
              : "controlPanel__groupButton"
          }
          onClick={() => props.onSwitch("active")}
        >
          Active
        </div>
        <div
          className={
            props.filterBy === "completed"
              ? "controlPanel__groupButton controlPanel__groupButton_active"
              : "controlPanel__groupButton"
          }
          onClick={() => props.onSwitch("completed")}
        >
          Completed
        </div>
      </div>
      <div
        className="controlPanel__clearButton"
        style={
          !!props.todos.filter(el => el.done === true).length
            ? { opacity: 1 }
            : { opacity: 0 }
        }
        onClick={props.onDeleteCompleted}
      >
        Clear completed
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    filterBy: state.filterBy,
    show: !!state.todos.filter(el => !el.done).length,
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSwitch: value => dispatch(switchFilter(value)),
    onDeleteCompleted: () => dispatch(deleteCompleted())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
