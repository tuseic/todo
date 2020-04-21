type Todo = {
  text: string,
  doneflag: boolean
}

export type State = {
  todos: Todo[]
}

export const initialState: State = {
  todos: [
    {text: "example1", doneflag: false},
    {text: "example2", doneflag: true},
  ]
}
