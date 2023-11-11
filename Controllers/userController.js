const User = require('../Models/UserSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { first_name, last_name, email, age, password, fonction,image } = req.body;
        // check if the email is unique
        const foundUser = await User.findOne({ email });
        foundUser && res.status(400).send({errors : [{msg:"This email already used"}]});
        const newUser = new User({ first_name, last_name, email, age, password, fonction, image });
        newUser.password = await bcrypt.hash(password, 10);
        await newUser.save();

        const token = jwt.sign({
            id: newUser._id
         },
            process.env.SECRET_KEY
         );
        res.status(201).send({success : {msg:"User created successfuly" , newUser , token}});
    } catch (error) {
        res.status(400).send({errors : [{msg:error.message}]});
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send({success :{msg:"All users", users}});
    } catch (error) {
        res.status(400).send({errors:[{msg:error.message}]});
    }
}

exports.login = async (req, res) => {
    try {
            const { email, password } = req.body;

            const foundUser = await User.findOne({email});

            if(!foundUser){
              return res.status(400).send({errors : [{ msg:"This user does not exist" }]});
                }

            const match = await bcrypt.compare(password, foundUser.password);
            
            if(!match)
            res.status(400).send({errors : [{msg:"Wrong password"}]})

                const token = jwt.sign({
                    id: foundUser._id
                 },
                    process.env.SECRET_KEY
                 );

                 res.status(200).send({success : {msg:"Login successfuly" , foundUser ,token}});

    }catch (error) {
            res.status(400).send({errors : [{msg:error.message}]});
    }
}

