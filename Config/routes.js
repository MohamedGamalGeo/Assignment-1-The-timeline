import express from 'express'
import data from '../Config/Data.js' 

import myController from '../Controller/myController.js';

const route = express.Router();



route.get('/', myController.HomePage)
route.post('/add-user' , myController.createNewUser)
route.get('/users/:id' , myController.getUserById)

//route.post('/form', myController.userInput)


export default route

