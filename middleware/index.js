const express=require('express');
const fs =require('fs');
//const reqAge = require('./Middleware/Middleware');
const app=express();
const users = require('./users_400.json');
//const router = express.Router();
//router.use(reqAge);
//app.get('',(req,res)=>{
  //  res.send("Welcome to Home Page");
//})
app.get('/',(req,res)=>{
    res.send("Welcome to our website");
});
app.get('/api/users',(req,res)=>{
    return res.json(users);
});
app.get('/user',(req,res)=>{
    const html=`
    <ul>
    ${users.map(user=> `<li>${user.name}</li>`).join(' ')}
    
    </ul>`
    res.send(html);
});
app.get('/api/users/:id',(req,res)=>{
    const id = Number(req.params.id);
    console.log(id);
    const user = users.find(u=>u.id===id);
    return res.json(user);
})

app.post('/users',(req,res)=>{
    //will do this mongodb or postman
    const newData={
        "id": 1,
        "name": "User_IaVQi",
        "email": "user1@example.com",
        "address": "511 Street ZcWQCK, City_CCxj",
        "contact": "9589904272"
    

    }
    fs.appendFile(newData, (err)=>{
        if(err){
            console.log(err);
        }
    })
})

app.patch('/apis/users/:id',(req,res)=>{
    //will do this mongodb or postman
})
app.delete('/apis/users/:id',(req,res)=>{
    //will do this mongodb or postman
})

//app.get('/about',router,(req,res)=>{
  //  res.send("Welcome to About Page");
//})

//router.get('/contact',(req,res)=>{
  //  res.send("Welcome to Contact Page");
//})
//app.use(router);
app.listen(3000,()=>{
   console.log("Server Started");
})
// application, router middleware and ejs integration