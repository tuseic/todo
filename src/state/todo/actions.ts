import { actionCreatorFactory } from 'typescript-fsa'
import { State } from 'state/todo'

type Type = {
  todo: State['todos']['todo']
  doneflag: State['todos']['doneflag']
}

const actionCreator = actionCreatorFactory('TODO')

export const actions = {
  setTodo: actionCreator<Type['todo']>('SET_TODO'),
  setDoneFlag: actionCreator<Type['doneflag']>('SET_DONEFLAG')
}
