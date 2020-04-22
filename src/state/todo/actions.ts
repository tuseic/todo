import { actionCreatorFactory } from 'typescript-fsa'
import { State } from 'state/todo'

type Type = {
  index: number
  todo: State['todos'][0]
  setTodo: {
    todo: State['todos'][0]
    index: number
  }
  deleteIndex: State['deleteIndex']
}

const actionCreator = actionCreatorFactory('TODO')

export const actions = {
  newTodo: actionCreator('NEW_TODO'),
  setTodo: actionCreator<Type['setTodo']>('SET_TODO'),
  deleteTodo: actionCreator<Type['index']>('DELETE_TODO'),
  setDeleteIndex: actionCreator<Type['deleteIndex']>('SET_DELETE_INDEX'),
}
