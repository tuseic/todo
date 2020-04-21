import { actionCreatorFactory } from 'typescript-fsa'
import { State } from 'state/todo'

type Type = {
  name: State['text']['name']
  description: State['text']['description']
}

const actionCreator = actionCreatorFactory('TODO')

export const actions = {
  setName: actionCreator<Type['name']>('SET_NAME'),
  setDescription: actionCreator<Type['description']>('SET_DESCRIPTION')
}
