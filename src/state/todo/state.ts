type Text = {
  name: string,
  doneflag: boolean
}

export type State = {
  text: Text
}

export const initialState: State = {
  text: {
    name: '',
    doneflag: false
  },
}
