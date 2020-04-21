import { actionCreatorFactory } from 'typescript-fsa'
import { State } from 'state/todo'

type Type = {
  name: State['text']['name']
  doneflag: State['text']['doneflag']
}

const actionCreator = actionCreatorFactory('TODO')

export const actions = {
  setName: actionCreator<Type['name']>('SET_NAME'),
  setDoneFlag: actionCreator<Type['doneflag']>('SET_DONEFLAG')
}
