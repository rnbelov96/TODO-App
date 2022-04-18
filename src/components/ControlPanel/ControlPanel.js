import FilterStatus from '@/contstants';
import { AppActionCreators } from '@/redux/app';
import {
  getFilterStatus,
  getTODOSToShow,
  getUnfinishedTODOCount,
} from '@/redux/app/selectors';
import React from 'react';
import { connect } from 'react-redux';

function ControlPanel(props) {
  return (
    <div className="controlPanel">
      <div
        className="controlPanel__itemsLeft"
        style={
          props.unfinishedTODOCount === 0 ? { opacity: 0 } : { opacity: 1 }
        }
      >
        {props.unfinishedTODOCount}
        {' '}
        items left
      </div>
      <div className="controlPanel__groupButtons">
        <div
          className={
            props.filterBy === FilterStatus.ALL
              ? 'controlPanel__groupButton controlPanel__groupButton_active'
              : 'controlPanel__groupButton'
          }
          onClick={() => props.onSwitch(FilterStatus.ALL)}
        >
          All
        </div>
        <div
          className={
            props.filterBy === FilterStatus.ACTIVE
              ? 'controlPanel__groupButton controlPanel__groupButton_active'
              : 'controlPanel__groupButton'
          }
          onClick={() => props.onSwitch(FilterStatus.ACTIVE)}
        >
          Active
        </div>
        <div
          className={
            props.filterBy === FilterStatus.COMPLETED
              ? 'controlPanel__groupButton controlPanel__groupButton_active'
              : 'controlPanel__groupButton'
          }
          onClick={() => props.onSwitch(FilterStatus.COMPLETED)}
        >
          Completed
        </div>
      </div>
      <div
        className="controlPanel__clearButton"
        style={
          props.todos.filter(el => el.done === true).length
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
    filterBy: getFilterStatus(state),
    unfinishedTODOCount: getUnfinishedTODOCount(state),
    todos: getTODOSToShow(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSwitch: value => dispatch(AppActionCreators.switchFilter(value)),
    onDeleteCompleted: () => dispatch(AppActionCreators.deleteCompletedTODO()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
