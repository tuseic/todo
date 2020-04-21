import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState, actions } from 'state/todo'

export const reducer = reducerWithInitialState(initialState)
  .case(actions.setTodo, (state, payload) => {
    return { ...state, todos: { ...state.todos, todo: payload } }
  })
  .case(actions.setDoneFlag, (state, payload) => {
    return { ...state, todos: { ...state.todos, doneflag: payload } }
  })
