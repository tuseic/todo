import { actionCreatorFactory } from 'typescript-fsa'
import { State } from 'state/todo'

type Type = {
  todo: State['todos'][0]
  setTodo: {
    todo: State['todos'][0]
    index: number
  }
  deleteTodoIndex: number
}

const actionCreator = actionCreatorFactory('TODO')

export const actions = {
  newTodo: actionCreator('NEW_TODO'),
  setTodo: actionCreator<Type['setTodo']>('SET_TODO'),
  deleteTodo: actionCreator<Type['deleteTodoIndex']>('DELETE_TODO'),
}
