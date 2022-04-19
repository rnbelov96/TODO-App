import { AppActionCreators } from '@/redux/app';
import { getTODOSToShow } from '@/redux/app/selectors';
import { TODOListPropsType } from '@/types/components/TODO-list';
import { FullStateType } from '@/types/general-types';
import { AppActionType } from '@/types/redux/app-reducer';
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export const PureTODOList: React.FunctionComponent<TODOListPropsType> = ({
  todosToShow,
  onChange,
  onDelete,
}) => (
  <>
    {todosToShow.map(el => (
      <div
        className={el.done ? 'todoItem todoItem_done' : 'todoItem'}
        key={el.id}
      >
        <input
          checked={el.done}
          onChange={() => onChange(el.id)}
          type="checkbox"
        />
        {el.text}
        <button
          type="button"
          onClick={() => onDelete(el.id)}
          className="todoItem__deleteButton"
        >
          x
        </button>
      </div>
    ))}
  </>
);

function mapStateToProps(state: FullStateType) {
  return {
    todosToShow: getTODOSToShow(state),
  };
}

function mapDispatchToProps(dispatch: Dispatch<AppActionType>) {
  return {
    onChange: (id: string) => dispatch(AppActionCreators.changeTodoStatus(id)),
    onDelete: (id: string) => dispatch(AppActionCreators.deleteTODO(id)),
  };
}

export const TODOList = connect(mapStateToProps, mapDispatchToProps)(PureTODOList);
