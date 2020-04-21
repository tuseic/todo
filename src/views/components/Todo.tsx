import React from 'react'
import { State } from 'state'

type Type = {
  name: State['todo']['text']['name']
  description: State['todo']['text']['description']
}

type OwnProps = {
  name: Type['name']
  description: Type['description']
}

type Handler = {
  handleSetName: (
    (name: Type['name']) => void
  )
  handleSetDescription: (
    (description: Type['description']) => void
  )
}

type Props = OwnProps & Handler

export const Todo: React.FC<Props> = (props) => {

  const setNameFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.handleSetName(e.target.value)
  }

  const setDescriptionFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.handleSetDescription(e.target.value)
  }

  return (
    <React.Fragment>
      <input
        onChange={setNameFunc}
        value={props.name}
        placeholder='name'
      />
      <input
        onChange={setDescriptionFunc}
        value={props.description}
        placeholder='description'
      />
    </React.Fragment>
  )
}
