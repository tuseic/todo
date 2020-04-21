type Todo = {
  todo: string,
  doneflag: boolean
}

export type State = {
  todos: Todo
}

export const initialState: State = {
  todos: {
    todo: '',
    doneflag: false
  },
}
