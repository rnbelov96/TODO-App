import FilterStatus from '@/contstants';
import { AppActionCreators } from '@/redux/app';
import {
  getFilterStatus,
  getTODOSToShow,
  getUnfinishedTODOCount,
} from '@/redux/app/selectors';
import { ControlPanelPropsType } from '@/types/components/control-panel';
import { FullStateType } from '@/types/general-types';
import { AppActionType } from '@/types/redux/app-reducer';
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export const PureControlPanel: React.FunctionComponent<ControlPanelPropsType> = ({
  unfinishedTODOCount,
  filterBy,
  todos,
  onSwitch,
  onDeleteCompleted,
}) => (
  <div className="controlPanel">
    <div
      className="controlPanel__itemsLeft"
      style={unfinishedTODOCount === 0 ? { opacity: 0 } : { opacity: 1 }}
    >
      {unfinishedTODOCount}
      {' '}
      items left
    </div>
    <div className="controlPanel__groupButtons">
      <button
        type="button"
        className={
          filterBy === FilterStatus.ALL
            ? 'controlPanel__groupButton controlPanel__groupButton_active'
            : 'controlPanel__groupButton'
        }
        onClick={() => onSwitch(FilterStatus.ALL)}
      >
        All
      </button>
      <button
        type="button"
        className={
          filterBy === FilterStatus.ACTIVE
            ? 'controlPanel__groupButton controlPanel__groupButton_active'
            : 'controlPanel__groupButton'
        }
        onClick={() => onSwitch(FilterStatus.ACTIVE)}
      >
        Active
      </button>
      <button
        type="button"
        className={
          filterBy === FilterStatus.COMPLETED
            ? 'controlPanel__groupButton controlPanel__groupButton_active'
            : 'controlPanel__groupButton'
        }
        onClick={() => onSwitch(FilterStatus.COMPLETED)}
      >
        Completed
      </button>
    </div>
    <button
      type="button"
      className="controlPanel__clearButton"
      style={
        todos.filter(el => el.done === true).length
          ? { opacity: 1 }
          : { opacity: 0 }
      }
      onClick={onDeleteCompleted}
    >
      Clear completed
    </button>
  </div>
);

function mapStateToProps(state: FullStateType) {
  return {
    filterBy: getFilterStatus(state),
    unfinishedTODOCount: getUnfinishedTODOCount(state),
    todos: getTODOSToShow(state),
  };
}

function mapDispatchToProps(dispatch: Dispatch<AppActionType>) {
  return {
    onSwitch: (value: FilterStatus) => dispatch(AppActionCreators.switchFilter(value)),
    onDeleteCompleted: () => dispatch(AppActionCreators.deleteCompletedTODO()),
  };
}

export const ControlPanel = connect(mapStateToProps, mapDispatchToProps)(PureControlPanel);
