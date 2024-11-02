import express, { json, urlencoded } from 'express'
import routes from './Config/routes.js'
 
const app=express();

const port = 4000


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});



app.set('view engine','ejs')
app.use(express.urlencoded({extended: true}))

app.use(express.static('public'));
app.use(express.json())

app.use(routes)
