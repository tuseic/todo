type Todo = {
  text: string,
  doneflag: boolean
}

export type State = {
  todos: Todo[]
}

export const initialState: State = {
  todos: []
}
