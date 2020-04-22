import { Dispatch } from 'redux'
import axios from 'axios'
import { State, actions } from 'state/todo'

type Type = {
  todos: State['todos']
}

const getTodos = () => {
  return (dispatch: Dispatch, _getState: () => State) => {
    axios.get('http://localhost:3001/todos')
      .then((res) => {
        dispatch(actions.getTodos.done({params: {}, result: res.data as Type['todos']}))
      })
      .catch((reason) => {
        console.log(reason)
      })
  }
}

export const operations = {
  getTodos
}
