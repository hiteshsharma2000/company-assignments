const jwt=require('jsonwebtoken')

const auth=(req,res,next)=>{
    const token =req.headers.authorization
 try {
    if(token){
    jwt.verify(token,"user",function(err,decode){
        if(decode){
            req.user = {
      id: decode.id,
      name: decode.name,
      email: decode.email,
      dob: decode.dob
    };
            next()
        }else{
            res.send({msg:"session expired login again"})
        }
    })
}
else{
    res.send({msg:"need to login"})
}
 } catch (error) {
    res.send({"err":error})
 }

}

module.exports={auth}