import React from 'react'
import { State } from 'state'

type Type = {
  todos: State['todo']['todos']
  todo: State['todo']['todos'][0]
  deleteIndex: State['todo']['deleteIndex']
}

type OwnProps = {
  todos: Type['todos']
  deleteIndex: Type['deleteIndex']
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
  handleSetDeleteIndex: (
    (deleteIndex: Type['deleteIndex']) => void
  )
}

type Props = OwnProps & Handler

export const Todo: React.FC<Props> = (props) => {

  const setTodoTextFunc = (todo: Type['todo'], index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    props.handleSetTodo({ ...todo, text: e.target.value }, index)
    props.handleSetDeleteIndex(null)
  }

  const setTodoDoneFlagFunc = (todo: Type['todo'], index: number) => () => {
    props.handleSetTodo({ ...todo, doneflag: !todo.doneflag }, index)
    props.handleSetDeleteIndex(null)
  }

  const newTodoFunc = () => {
    props.handleNewTodo()
    props.handleSetDeleteIndex(null)
  }

  const deleteTodoFunc = (index: number) => () => {
    if (props.deleteIndex === null) {
      props.handleSetDeleteIndex(index)
    } else {
      if (props.deleteIndex === index) {
        props.handleDeleteTodo(props.deleteIndex)
        props.handleSetDeleteIndex(null)
      } else {
        props.handleSetDeleteIndex(index)
      }
    }
  }

  return (
    <React.Fragment>
      {
        props.todos.map((todo, index) => {
          return (
            <div key={index}>
              <button onClick={deleteTodoFunc(index)}>
                { props.deleteIndex === index
                  ? <span style={{color: "red"}}> X </span>
                  : <span> X </span>
                }
              </button>
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
