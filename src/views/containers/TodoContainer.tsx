import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { State, initialState, actions } from 'state'
import { Todo } from 'views/components/Todo'

type Type = {
  todo: State['todo']['todos']['todo']
  doneflag: State['todo']['todos']['doneflag']
}

const TodoContainer = () => {
  const todo = useSelector<State, Type['todo']>(
    state => state.todo.todos.todo
  )
  const doneflag = useSelector<State, Type['doneflag']>(
    state => state.todo.todos.doneflag
  )

  const dispatch = useDispatch()
  const handleSetTodo = useCallback(
    (todo: Type['todo']) => {
      dispatch(actions.todo.setTodo(todo))
    }, [dispatch]
  )
  const handleSetDoneFlag = useCallback(
    (doneflag: Type['doneflag']) => {
      dispatch(actions.todo.setDoneFlag(doneflag))
    }, [dispatch]
  )

  useEffect(() => {
    return () => {
      handleSetTodo(initialState.todo.todos.todo)
      handleSetDoneFlag(initialState.todo.todos.doneflag)
    }
  }, [handleSetTodo, handleSetDoneFlag])

  const props = { todo, doneflag, handleSetTodo, handleSetDoneFlag }

  return (
    <Todo {...props}/>
  )
}

export default TodoContainer
