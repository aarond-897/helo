require('dotenv').config();

const express=require('express'),
        app=express(),
        massive=require('massive'),
        {CONNECTION_STRING}=process.env,
        authCtrl=require('./authController'),
        postCtrl=require('./postController');

app.use(express.json());


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

//post endpoints
app.get('/api/posts/:userid', postCtrl.getPosts)
app.get('/api/post/:postid',postCtrl.getPost)
app.post('/api/post/:userid',postCtrl.addPost)
app.delete('/api/post/:postid', postCtrl.deletePost)

app.listen(4000, ()=>console.log('listening on port 4000'))