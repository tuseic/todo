import { createStore, combineReducers, applyMiddleware } from 'redux'
import { State, reducers } from 'state'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers<State>(reducers),
  applyMiddleware(thunk)
)

export default store
