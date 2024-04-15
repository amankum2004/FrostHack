const User = require("../model/user-model")

const home = async(req,res) => {
    try {
        res.status(200).send("Welcome to MERN stack development ")
    } catch (error) {
        console.log(error)
    }
}

const register = async(req,res) => {
    try {
        const {voterId,state,constituency} = req.body;
        const userExist = await User.findOne({voterId}) 
        if(userExist){
            return res.status(400).json({message: "Voter Id already exists"})
        }

        const userCreated =  await User.create({
            voterId,
            state,
            constituency
        });

        console.log(req.body)
        res.status(201).json({
            message: "Registration successful",
            // token: await userCreated.generateToken(),
            userId: userCreated._id
        })
    } catch (error) {
        next(error)
    }
}

const login = async (req,res) =>{
    try {
        const {voterId} = req.body;
        const userExist = await User.findOne({voterId});
        if (!userExist) {
            return res.status(404).json({
                msg: "Invalid credentials"
            })
        }
        // const user = await bcrypt.compare(password,userExist.password);
        // const user = await userExist.comparePassword(password)

        if (userExist) {
            res.status(201).json({
                message: "Voter found",
                // token: await userExist.generateToken(),
                userId: userExist._id
            })
        }else{
            res.status(401).json({message: "Invalid credential"})
        }
    } catch (error) {
        // res.status(500).json("Internal server error")
        next(error)
    }
};

// LOGIC TO SEND USER DATA 
const user = async(req,res) => {
    try {
        const userData = req.user;
        // console.log(userData);
        return res.status(200).json({userData})
    } catch (error) {
        console.log(`Error from the user route: ${error}`);
    }
}

module.exports = {home,register,login,user};

