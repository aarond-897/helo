module.exports={
    getPosts:async (req,res)=>{
        console.log('working')
        const {userid}=req.session;
        const {search, userposts}=req.query;
        const boolSearch=Boolean(search);
        const boolPost=Boolean(userposts);
        const db=req.app.get('db');



        if(search  && userposts==='true'){
            ///GO BACK TO!!! fix param
            // console.log('get all posts working. it works')
            const posts = await db.get_all_posts_by_title(search)
            res.status(200).send(posts)
        }
        else if(!search && userposts==='false'){
            ///GO BACK TO!!! fix param
            // console.log('get all posts 2 working')
            const posts = await db.posts_not_by_user(userid)
            res.status(200).send(posts)
        }
        else if(userposts==='false' && search){
            // console.log('get all posts 3 working')
            const posts = await db.string_not_user(search,userid)
            res.status(200).send(posts)
        }
        else{
            const posts = await db.get_all_posts()
            // console.log('last else')
            // console.log(posts[0])
            res.status(200).send(posts)
        }
    },
    getPost:async (req,res)=>{
        const {userid}=req.session;
        const db=req.app.get('db');
        const post = await db.get_post(userid);
        console.log(post)
        res.status(200).send(post[0])

    },
    addPost:async (req,res)=>{
        const {userid}=req.params;
        const {title, img, content}=req.body;
        const db=req.app.get('db');

        db.add_post({title,img,content,userid})
        .then(()=>res.sendStatus(200))
        .catch(err=>console.log(err))
    },
    deletePost:async(req,res)=>{
        //go back to
        const {postid}=req.params,
            db=req.app.get('db');

        db.delete_post()

    }
}


