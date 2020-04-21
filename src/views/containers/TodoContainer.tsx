import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { State, actions } from 'state'
import { Todo } from 'views/components/Todo'

type Type = {
  todos: State['todo']['todos']
  todo: State['todo']['todos'][0]
}

const TodoContainer = () => {
  const todos = useSelector<State, Type['todos']>(
    state => state.todo.todos
  )

  const dispatch = useDispatch()
  const handleSetTodo = useCallback(
    (todo: Type['todo'], index: number) => {
      dispatch(actions.todo.setTodo({
        todo: todo,
        index: index
      }))
    }, [dispatch]
  )
  const handleNewTodo = useCallback(
    () => {
      dispatch(actions.todo.newTodo({
        text: '',
        doneflag: false,
      }))
    }, [dispatch]
  )
  const handleDeleteTodo = useCallback(
    (index: number) => {
      dispatch(actions.todo.deleteTodo(index))
    }, [dispatch]
  )

  const props = { todos, handleSetTodo, handleNewTodo, handleDeleteTodo }

  return (
    <Todo {...props}/>
  )
}

export default TodoContainer
