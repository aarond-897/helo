require('dotenv').config();

const express=require('express'),
        app=express(),
        massive=require('massive'),
        session=require('express-session'),
        {CONNECTION_STRING,SESSION_SECRET}=process.env,
        authCtrl=require('./authController'),
        postCtrl=require('./postController');

app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized:true,
    secret: SESSION_SECRET,
    cookie: {maxAge:1000*60*60*24*365}
}))

massive({
    connectionString:CONNECTION_STRING,
    ssl:{
        rejectUnauthorized:false
    }
}).then(db=>{
    app.set('db',db)
    console.log('db connected')
}).catch(err=>console.log(err))

//auth endpoints
app.post('/auth/register',authCtrl.register)
app.post('/auth/login',authCtrl.login)
app.post('/auth/logout',authCtrl.logout)
app.get('/auth/me',authCtrl.getProfileInfo)

//post endpoints
app.get('/api/posts/', postCtrl.getPosts)
app.get('/api/post/:postid',postCtrl.getPost)
app.post('/api/post/',postCtrl.addPost)
app.delete('/api/post/:postid', postCtrl.deletePost)

app.listen(4000, ()=>console.log('listening on port 4000'))