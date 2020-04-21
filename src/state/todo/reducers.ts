import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState, actions } from 'state/todo'

export const reducer = reducerWithInitialState(initialState)
  .case(actions.setName, (state, payload) => {
    return { ...state, text: { ...state.text, name: payload } }
  })
  .case(actions.setDescription, (state, payload) => {
    return { ...state, text: { ...state.text, description: payload } }
  })
