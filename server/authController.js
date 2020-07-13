const bcrypt = require('bcryptjs');

module.exports={
    login:async(req,res)=>{
        const {username, password}=req.body,
            db=req.app.get('db');

        const foundUser= await db.check_user({username});
        if(!foundUser[0]){
            return res.status(400).send('User does not exist')
        }

        const authorized = bcrypt.compareSync(password,foundUser[0].password)
        if(!authorized){
            return res.status(401).send('Incorrect password')
        }
        
        delete foundUser[0].password
        req.session.user=foundUser[0]
        // console.log(req.session.user)
        res.status(202).send(req.session.user)
        // res.status(202).send(foundUser[0])
    },
    register:async(req,res)=>{
        const {username, password}=req.body,
            db=req.app.get('db');
            console.log(username)
        const foundUser = await db.check_user({username})
        // console.log(foundUser)
        if(foundUser[0]){
           return res.status(400).send('User already exists')
        }

        const salt = bcrypt.genSaltSync(10),
            hash=bcrypt.hashSync(password,salt),
            profilePicture=`https://robohash.org/${username}`;
        const newUser = await db.add_user({username, password:hash, profilePicture})
        console.log(newUser)
        req.session.user=newUser[0]
        console.log(req.session.user)
        res.status(201).send(req.session.user)
        // res.status(201).send(newUser)
    },
    logout:(req,res)=>{
        req.session.destroy();
        res.sendStatus(200);
    },
    getProfileInfo:async(req,res)=>{
        db=req.app.get('db');
        const profileInfo= await db.get_nav_info(req.session.user.id)
        console.log(profileInfo)
        res.status(200).send(profileInfo[0])
    }
}