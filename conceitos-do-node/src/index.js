const express = require('express');

const app = express();

app.get('/projects', (request, response) => {
  return response.json([
    'project 1',
    'project 2',
  ])
})

app.post('/projects', (request, response) => {
  return response.json([
    'project 1',
    'project 2',
    'project 3',
  ])
})

app.put('/projects:id', (request, response) => {
  return response.json([
    'project 4',
    'project 2',
    'project 3',
  ])
})

app.delete('/projects:id', (request, response) => {
  return response.json([
    'project 2',
    'project 3',
  ])
})

app.listen(3333, () => {
  console.log('🚀️ backend started!')
})