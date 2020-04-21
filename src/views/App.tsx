import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TodoContainer from './containers/TodoContainer'

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path='/'><TodoContainer/></Route>
    </Router>
  )
}

export default App
