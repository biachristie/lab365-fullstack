import React, { useState } from 'react'

import Header from "./components/Header/Header"
import Form from "./components/Form/Form"
import Card from "./components/Card/Card"
import Search from './components/Search/Search'

import "./App.css"

function App() {
  const [users, setUsers] = useState([])
  const [show, setShow] = useState(false)

  let id = users.length + 1

  return (
    <React.Fragment>
      <Header />
      <Search users={ users } />
      <Form setUsers={ setUsers } userId={ id } />
      <Card users={ users } show={ show } setShow={ setShow } />
    </React.Fragment>
  )
}

export default App
