import React from 'react'

import Header from './components/Header'

function App() {
  return (
    <>
      <Header title="homepage">
        <ul>
          <li>homepage</li>
          <li>projects</li>
        </ul>
      </Header>
      <Header title="projects"/>
    </>
  )
}

export default App;