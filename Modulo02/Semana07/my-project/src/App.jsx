import React, { useState } from 'react'

import Header from "./components/Header/Header"
import Form from "./components/Form/Form"
import Card from "./components/Card/Card"

function App() {
  const [users, setUsers] = useState([])

  return (
    <React.Fragment>
      <Header />
      <Form setUsers={ setUsers } />
      <Card users={ users } />
    </React.Fragment>
  )
}

export default App
