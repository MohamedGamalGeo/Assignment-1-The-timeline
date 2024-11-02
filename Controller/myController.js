import data from '../Config/Data.js'

const HomePage = ((req,res) =>{
    res.render('index', { user_data:data });
    

} )

const array =[] // to save user data

const createNewUser = (req, res) =>{
    const {id , name, createdAt, message } = req.body

     if (!id || !name || !createdAt || !message) {
        
        
        return res.status(400).json({error: 'id name and createdAt and message are required!'})

     }
  
    else { (id && name && createdAt && message) 
        data.push({id , name, createdAt, message })
        console.log('user added successfuly');
        res.render('index', { user_data:data });
        
        return res.status(201).json({msg: 'new user has been created'})
    }

}


const getUserById = (req, res) => {
    const id = req.params.id;
  
    for (const userByID of data) {
      if (userByID.id == id) {
        res.status(200);
        res.json(userByID);
        return;
      }
    }
    res.status(404).send({ error: "data does not exist" });
  };





export default {
    HomePage,
    createNewUser,
    getUserById
   
}