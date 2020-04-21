import React from 'react'
import { State } from 'state'

type Type = {
  todos: State['todo']['todos']
  todo: State['todo']['todos'][0]
}

type OwnProps = {
  todos: Type['todos']
}

type Handler = {
  handleSetTodo: (
    (todo: Type['todo'], index: number) => void
  )
  handleNewTodo: (
    () => void
  )
  handleDeleteTodo: (
    (index: number) => void
  )
}

type Props = OwnProps & Handler

export const Todo: React.FC<Props> = (props) => {

  const setTodoTextFunc = (todo: Type['todo'], index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    props.handleSetTodo({ ...todo, text: e.target.value }, index)
  }

  const setTodoDoneFlagFunc = (todo: Type['todo'], index: number) => () => {
    props.handleSetTodo({ ...todo, doneflag: !todo.doneflag }, index)
  }

  const newTodoFunc = () => {
    props.handleNewTodo()
  }

  const deleteTodoFunc = (index: number) => () => {
    props.handleDeleteTodo(index)
  }

  return (
    <React.Fragment>
      {
        props.todos.map((todo, index) => {
          return (
            <div key={index}>
              <button onClick={deleteTodoFunc(index)}> X </button>
              <input
                type='text'
                onChange={setTodoTextFunc(todo, index)}
                value={todo.text}
              />
              <input
                type='checkbox'
                onClick={setTodoDoneFlagFunc(todo, index)}
                checked={todo.doneflag}
                readOnly
              />
            </div>
          )
        })
      }
      <button onClick={newTodoFunc}>newTodo</button>
    </React.Fragment>
  )
}
