module.exports={
    getPosts:async (req,res)=>{
        console.log('working')
        const {userid}=req.params;
        const {search, userposts}=req.query;
        console.log(Boolean(search))
        console.log(userposts)
        const db=req.app.get('db');

        if(userposts && search){
            console.log('get all posts working. it works')
            const posts = await db.get_all_posts_by_title(search)
            res.status(200).send(posts)
        }
        else if(!userposts && !search){
            console.log('get all posts 2 working not hitting')
            const posts = await db.posts_not_by_user(userid)
            res.status(200).send(posts)
        }
        else if(userposts=false && search){
            console.log('get all posts 3 working')
            const posts = await db.posts_not_by_user(search,userid)
            res.status(200).send(posts)
        }
        else{
            const posts = await db.get_all_posts()
            console.log('last else')
            console.log(posts[0])
            res.status(200).send(posts)
        }
    },
    getPost:async (req,res)=>{
        const {postid}=req.params;
        const db=req.app.get('db');
        const post = await db.get_post(postid);
        res.status(200).send(post)

    },
    addPost:async (req,res)=>{

    },
    deletePost:async(req,res)=>{

    }
}