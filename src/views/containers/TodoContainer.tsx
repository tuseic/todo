import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { State, actions, operations } from 'state'
import { Todo } from 'views/components/Todo'

type Type = {
  todos: State['todo']['todos']
  todo: State['todo']['todos'][0]
  deleteIndex: State['todo']['deleteIndex']
}

const TodoContainer = () => {
  const todos = useSelector<State, Type['todos']>(
    state => state.todo.todos
  )
  const deleteIndex = useSelector<State, Type['deleteIndex']>(
    state => state.todo.deleteIndex
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
      dispatch(actions.todo.newTodo())
    }, [dispatch]
  )
  const handleDeleteTodo = useCallback(
    (index: number) => {
      dispatch(actions.todo.deleteTodo(index))
    }, [dispatch]
  )
  const handleSetDeleteIndex = useCallback(
    (deleteIndex: Type['deleteIndex']) => {
      dispatch(actions.todo.setDeleteIndex(deleteIndex))
    }, [dispatch]
  )
  const handleGetTodos = useCallback(
    () => dispatch(operations.todo.getTodos()), [dispatch]
  )

  useEffect(() => {
    handleGetTodos()
  }, [handleGetTodos])

  const props = { todos, handleSetTodo, handleNewTodo, handleDeleteTodo, deleteIndex, handleSetDeleteIndex }

  return (
    <Todo {...props}/>
  )
}

export default TodoContainer
