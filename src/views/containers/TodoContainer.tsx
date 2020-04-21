import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { State, initialState, actions } from 'state'
import { Todo } from 'views/components/Todo'

type Type = {
  name: State['todo']['text']['name']
  doneflag: State['todo']['text']['doneflag']
}

const TodoContainer = () => {
  const name = useSelector<State, Type['name']>(
    state => state.todo.text.name
  )
  const doneflag = useSelector<State, Type['doneflag']>(
    state => state.todo.text.doneflag
  )

  const dispatch = useDispatch()
  const handleSetName = useCallback(
    (name: Type['name']) => {
      dispatch(actions.todo.setName(name))
    }, [dispatch]
  )
  const handleSetDoneFlag = useCallback(
    (doneflag: Type['doneflag']) => {
      dispatch(actions.todo.setDoneFlag(doneflag))
    }, [dispatch]
  )

  useEffect(() => {
    return () => {
      handleSetName(initialState.todo.text.name)
      handleSetDoneFlag(initialState.todo.text.doneflag)
    }
  }, [handleSetName, handleSetDoneFlag])

  const props = { name, doneflag, handleSetName, handleSetDoneFlag }

  return (
    <Todo {...props}/>
  )
}

export default TodoContainer
