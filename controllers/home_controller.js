const User = require('../models/user');
module.exports.home = (req,res) => {

} 

module.exports.user = async (req,res) => {
    try{
    console.log(req.body);
    let post = await User.create({ 
        email : req.body.email,
        number : req.body.number,
        name : req.body.name, 
    })
    console.log(post);
    return res.send(
        {post : post}
    );
    }   
    catch(err){
        console.log(`This is the error in create api ${err}`);
        return res.send(
            `there was an error ${err}`
        )
    }
 }

 module.exports.delete = async (req,res) => {
     try{
     await User.deleteOne({_id : req.body.id});
     }
     catch(err)
     {
     console.log(`This is the error in delete api ${err}`);
     }
 }

 module.exports.update = async (req,res) => {
     try{
     let post = await User.findByIdAndUpdate(req.body.id, {
         name : req.body.name,
         email : req.body.email,
         number :req.body.number
     })
     console.log(post);
     return res.send({
         post : post
     })
     }
     catch(err)
     {
     console.log(`This is the error in delete api ${err}`);
     }
 }