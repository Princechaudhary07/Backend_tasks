const express=require('express');
const session=require('express-session');
const app=express();
const FileStore=require('session-file-store')(session);
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: false
}));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('login');
});

app.post('/login',(req,res)=>{
    if(req.session.user){
        res.redirect('/home');
    }
    const {username}=req.body;
    req.session.username=username;
    res.redirect('/home');

});
app.get('/home',(req,res)=>{
    if(req.session.username){
        res.render('home',{username:req.session.username});
    }else{
        res.redirect('/');
    }});
app.get('/profile',(req,res)=>{
    if(req.session.username){
        res.render('profile',{username:req.session.username});
    }else{
        res.redirect('/');
    }
});
app.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/');

});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});