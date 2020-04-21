import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState, actions } from 'state/todo'

export const reducer = reducerWithInitialState(initialState)
  .case(actions.setName, (state, payload) => {
    return { ...state, text: { ...state.text, name: payload } }
  })
  .case(actions.setDoneFlag, (state, payload) => {
    return { ...state, text: { ...state.text, doneflag: payload } }
  })
