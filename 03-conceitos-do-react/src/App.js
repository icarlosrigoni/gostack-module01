import React, { useState } from 'react'

import './App.css'
import backgroundImage from './assets/background.jpeg'

import Header from './components/Header'

function App() {
  const [projects, setProjects] = useState(['App expo', 'Api node.js'])

  function handleAddProject() {
    setProjects([...projects, `New project ${Date.now()}`])
    console.log(projects)
  }

  return (
    <>
      <Header title="Projects"/>

      <img width={500} src={backgroundImage} alt="background "/>

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  )
}

export default App;