const bcrypt  = require('bcrypt');
const User = require('../model/schema');
const jwt = require('jsonwebtoken');

//controller for register
exports.registerUser = async (req, res)=>{
    try {
        

        //validate request
        if(!req.body){
            res.status(406).json({err:"You Have to fill The Registration Form"});
            return;
        } 

        //get user data
        let {email, password, passwordCheck, username} = req.body

        if(!email || !password || !passwordCheck || !username){
            res.status(406).json({err:"Not All fields are Entered"});
        }
        if(password.length<8 || passwordCheck.length<8){
            res.status(406).json({err:"The Password needs at least 8 characters"});

        }

        if(password !== passwordCheck){
            res.status(406).json({err:"Password must be the same for Verification"});

        }

        //hashing password
        const hash = await bcrypt.hashSync(password, 10);

        //Using Document Structure
        const newUser = new User ({
            email,   //Yoo Barbanne email:email akkatti Barressu Ni Dandeenya garuu Ijaaa Effect Hin Qbneef Tokkoma Isaa Barressu Ni dandeenya. like email jenne. username fis Akkasumaatti Fayyadamu Ni Dandeenya.
            password:hash,
            username
        })
        
        //Saving On Database
        newUser
            .save(newUser)
            .then(register =>{
                res.json(register)
            })
            .catch(error=>{
                res.status(406).json({err:error.message || "Something Went Wrong While Registration"});
            })
         
    } catch (error) {
        res.status(500).json({err:error.message || "Error While Registration"})
    }


}




//controller for login
exports.login = async(req, res)=>{

    try {
         //validate request
         if(!req.body){
            res.status(406).json({err:"You Have to fill The Login Form"});
            return;
        }

        //get User data
        let{email, password} = req.body    //Ihen Javascript New Yemiseralin. Ke Body Must Leyito Le Variablochuu Asign Madregun

        //validation
        if(!email || !password ){
            res.status(406).json({err:"Not All fields have been Entered"});
        }

        const user  = await User.findOne({email});

        if(!user){
            res.status(406).json({err:"No Account With this Email"});

        }


        //compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) res.status(406).json({err:"Invalid Credentials"});

        //create jwt token
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)


        res.json({
            token,
            username:user.username,
            email:user.email
        })

        
    } catch (error) {
        res.status(500).json({err:error.message || "Error While Logging"})

    }
}


//delete user controller
exports.delete = async (req, res)=>{

    try {
        await User.findByIdAndDelete(req.user_id);
        res.json({msg: "User deleted Successfully ..."});
        
    } catch (error) {
        res.status(500).json({err:error.message || "Error While Deleting User"})

        
    }
}