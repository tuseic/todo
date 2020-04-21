type Text = {
  name: string,
  description: string
}

export type State = {
  text: Text
}

export const initialState: State = {
  text: {
    name: '',
    description: '',
  },
}
