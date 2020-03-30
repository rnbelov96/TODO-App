import { CHANGEINPUT, SUBMIT, CHANGETODOSTATUS, DELETETODO, SWITCHFILTER, DELETECOMPLETED } from "./actionsTypes";

export function changeInput(e) {
  return {
    type: CHANGEINPUT,
    payload: e.target.value
  };
}

export function submit(e) {
  e.preventDefault()
  return {
    type: SUBMIT
  }
}

export const changeTodoStatus = (id) => {
  return {
    type: CHANGETODOSTATUS,
    payload: id
  }
}

export const deleteTodo = (id) => {
  return {
    type: DELETETODO,
    payload: id 
  }
}

export const switchFilter = (value) => {
  return {
    type: SWITCHFILTER,
    payload: value
  }
}

export const deleteCompleted = () => {
  return {
    type: DELETECOMPLETED
  }
}