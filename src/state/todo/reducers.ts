import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState, actions } from 'state/todo'

export const reducer = reducerWithInitialState(initialState)
  .case(actions.setTodo, (state, payload) => {
    return {
      ...state,
      todos: [
        ...state.todos.slice(0, payload.index),
        payload.todo,
        ...state.todos.slice(payload.index + 1)
      ]
    }
  })
  .case(actions.deleteTodo, (state, payload) => {
    return {
      ...state,
      todos: [
        ...state.todos.slice(0, payload),
        ...state.todos.slice(payload+1)
      ]
    }
  })
  .case(actions.newTodo, (state) => {
    return {
      ...state,
      todos: [
        ...state.todos,
        {
          text: '',
          doneflag: false
        }
      ]
    }
  })
  .case(actions.setDeleteIndex, (state, payload) => {
    return {
      ...state,
      deleteIndex: payload
    }
  })
  .case(actions.getTodos.done, (state, payload) => {
    return {
      ...state,
      todos: payload.result
    }
  })
