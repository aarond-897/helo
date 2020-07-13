module.exports={
    getPosts:async (req,res)=>{
        console.log('working')
        console.log(req.session)
        const {id}=req.session.user;
        const {search, userposts}=req.query;
        const db=req.app.get('db');



        if(search  && userposts==='true'){
            console.log('get all posts working. it works')
            const posts = await db.get_all_posts_by_title(search)
            delete posts[0].password
            res.status(200).send(posts)
        }
        else if(!search && userposts==='false'){
            console.log('get all posts 2 working')
            const posts = await db.posts_not_by_user(id)
            console.log(posts)
            delete posts[0].password
            res.status(200).send(posts)
        }
        else if(userposts==='false' && search){
            console.log('get all posts 3 working')
            const posts = await db.string_not_user(search,id)
            delete posts[0].password
            res.status(200).send(posts)
        }
        else{
            const posts = await db.get_all_posts()
            console.log('last else')
            // console.log(posts[0])
            res.status(200).send(posts)
        }
    },
    getPost:async (req,res)=>{
        const {postid}=req.params;
        const db=req.app.get('db');
        const post = await db.get_post(postid);
        console.log(post)
        res.status(200).send(post[0])

    },
    addPost:async (req,res)=>{
        const {id}=req.session.user;
        const {title, img, content}=req.body;
        const db=req.app.get('db');

        db.add_post({title,img,content,id})
        .then(()=>res.sendStatus(200))
        .catch(err=>console.log(err))
    },
    deletePost:async(req,res)=>{
        console.log('delete is working')
        const {postid}=req.params,
            db=req.app.get('db');

        db.delete_post(postid)
        .then((posts)=>res.status(200).send(posts))
        .catch(err => console.log(err));

    }
}


