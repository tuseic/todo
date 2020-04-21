import { actionCreatorFactory } from 'typescript-fsa'
import { State } from 'state/todo'

type Type = {
  setTodo: {
    todo: State['todos'][0]
    index: number
  }
}

const actionCreator = actionCreatorFactory('TODO')

export const actions = {
  setTodo: actionCreator<Type['setTodo']>('SET_TODO'),
}
