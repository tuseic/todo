type Todo = {
  text: string,
  doneflag: boolean
}

export type State = {
  todos: Todo[]
  deleteIndex: number | null
}

export const initialState: State = {
  todos: [],
  deleteIndex: null
}
