import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { State, initialState, actions } from 'state'
import { Todo } from 'views/components/Todo'

type Type = {
  name: State['todo']['text']['name']
  description: State['todo']['text']['description']
}

const TodoContainer = () => {
  const name = useSelector<State, Type['name']>(
    state => state.todo.text.name
  )
  const description = useSelector<State, Type['description']>(
    state => state.todo.text.description
  )

  const dispatch = useDispatch()
  const handleSetName = useCallback(
    (name: Type['name']) => {
      dispatch(actions.todo.setName(name))
    }, [dispatch]
  )
  const handleSetDescription = useCallback(
    (description: Type['description']) => {
      dispatch(actions.todo.setDescription(description))
    }, [dispatch]
  )

  useEffect(() => {
    return () => {
      handleSetName(initialState.todo.text.name)
      handleSetDescription(initialState.todo.text.description)
    }
  }, [handleSetName, handleSetDescription])

  const props = { name, description, handleSetName, handleSetDescription }

  return (
    <Todo {...props}/>
  )
}

export default TodoContainer
