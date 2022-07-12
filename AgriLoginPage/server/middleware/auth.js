const jwt= require('jsonwebtoken');


//create a middleware
const auth = (req, res, next)=>{
    const token = req.header('x-access-token');  //Pass Yadergniletin String Yefelegnewun Masgebat Enchilalen   //le headeru be x-access-token nw tokenun pass yeminaregilet 
    if(!token){
        return res.status(406).json({err: "No authentication token, Authorization Failed"});
    }

    const verified  = jwt.verify(token, process.env.JWT_SECRET)
    if(!verified){
        return res.status(406).json({err: "Token verification failed, Authorization Failed"});
    }

    req.user_id = verified.id;
    next();

}

module.exports = auth;