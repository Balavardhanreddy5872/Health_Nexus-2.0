import { comaparePassword, hashPassword } from "../helpers/authHelpers.js"
import User from "../models/UserModels.js"
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body

        // validations 
        if (!name) {
            return res.send({ error: 'Name is required' })
        }
        if (!email) {
            return res.send({ error: 'Email is required' })
        }
        if (!password) {
            return res.send({ error: 'Password is required' })
        }
        if (!phone) {
            return res.send({ error: 'Phone is required' })
        }
        if (!address) {
            return res.send({ error: 'Address is required' })
        }

        // Existsing user
        let existinguser = await User.findOne({ email });

        if (existinguser) {
            return res.status(200).send({
                sucess: true,
                message: "User already exists"
            });
        }

        // hasing password
        const hashedpassword = await hashPassword(password);

        // saving user
        const user = await new User({
            name,
            email,
            phone,
            address,
            password: hashedpassword,
        }).save();

        res.status(201).send({
            success: true,
            message: "User Register Successfully",
            user,
        });

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in Registeration',
            error
        })
    }
}

// Login

export const logincontroller = async (req, res) => {
    try {
        const { email, password } = req.body

        // validations
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid email or Password"
            })
        }

        //check user
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "No user Found"
            })
        }
        const match = await comaparePassword(password, user.password)
        if (!match) {
            return res.status(200).send({
                sucess: false,
                message: "Invalid password"
            });
        }
        // token 
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        })
        res.status(200).send({
            success: true,
            message: "login successfully",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                adddress: user.address,
            },
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Login',
            error
        })
    }

}

// verify user and Admin via middle ware 
//test controller
export const verifyController = (req, res) => {
    try {
        res.send("Protected Admin");
    } catch (error) {
        console.log(error);
        res.send({ error });
    }
};
