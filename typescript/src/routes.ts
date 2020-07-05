import { Request, Response } from 'express'
import createUser from './services/CreateUsers'

export function helloWorld(request: Request, response: Response) {

  const user = createUser( {
    email: 'danrigonisocial@gmail.com',
    password: '123456',
    techs: [
      'Node.js', 
      'ReactJS', 
      'React Native', 
      { title: 'JavaScript', experience: 100 },
    ],
  })


  return response.json({ message: 'Hello world ts' })
}