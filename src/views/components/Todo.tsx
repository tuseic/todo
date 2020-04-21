import React from 'react'
import { State } from 'state'

type Type = {
  todo: State['todo']['todos']['todo']
  doneflag: State['todo']['todos']['doneflag']
}

type OwnProps = {
  todo: Type['todo']
  doneflag: Type['doneflag']
}

type Handler = {
  handleSetTodo: (
    (todo: Type['todo']) => void
  )
  handleSetDoneFlag: (
    (doneflag: Type['doneflag']) => void
  )
}

type Props = OwnProps & Handler

export const Todo: React.FC<Props> = (props) => {

  const setTodoFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.handleSetTodo(e.target.value)
  }

  const setDoneFlagFunc = () => {
    props.handleSetDoneFlag(!props.doneflag)
  }

  return (
    <React.Fragment>
      <input
        type='text'
        onChange={setTodoFunc}
        value={props.todo}
        placeholder='todo'
      />
      <input
        type='checkbox'
        checked={props.doneflag}
        onClick={setDoneFlagFunc}
      />
    </React.Fragment>
  )
}
