import React from 'react'
import { State } from 'state'

type Type = {
  name: State['todo']['text']['name']
  doneflag: State['todo']['text']['doneflag']
}

type OwnProps = {
  name: Type['name']
  doneflag: Type['doneflag']
}

type Handler = {
  handleSetName: (
    (name: Type['name']) => void
  )
  handleSetDoneFlag: (
    (doneflag: Type['doneflag']) => void
  )
}

type Props = OwnProps & Handler

export const Todo: React.FC<Props> = (props) => {

  const setNameFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.handleSetName(e.target.value)
  }

  const setDoneFlagFunc = () => {
    props.handleSetDoneFlag(!props.doneflag)
  }

  return (
    <React.Fragment>
      <input
        type='text'
        onChange={setNameFunc}
        value={props.name}
        placeholder='name'
      />
      <input
        type='checkbox'
        checked={props.doneflag}
        onClick={setDoneFlagFunc}
      />
    </React.Fragment>
  )
}
