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
  .case(actions.newTodo, (state, payload) => {
    return { ...state, todos: [  ...state.todos, payload  ] }
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
