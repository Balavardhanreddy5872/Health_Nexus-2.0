const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
// const fetchuser = require('../middleware/fetchuser')

const JWT_SECRET = 'frghngfgbfg';

// ROUTE 1: create a user using POST "/api/login/createuser". NO login required
router.post('/signup', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid password').isLength({ min: 5 }),
    body('Specialization', 'Enter a valid Specialization').isLength({ min: 5 }),
    body('Description', 'Enter a valid Description').isLength({ min: 5 }),
], async (req, res) => {
    // if there are errors return errors and bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry with this email already exist" })
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        })

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json({ authtoken })
        // res.json(user)
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Some error occured")
    }
})


//ROUTE 2: Authenticate using POST "/api/auth/login". NO login required

router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'password cannot be blank').isLength({ min: 5 }),
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "please try to login with correct credientials" });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: "please try to login with correct credientials" });
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json({ authtoken })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
})


// ROUTE 3: GET logged in user details using POST "/api/auth/getuser". login required

// router.post('/getuser', fetchuser, async (req, res) => {
//     try {
//         userId = req.user.id;
//         const user = await User.findById(userId).select("-password")
//         res.send(user);
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Internal Server Error")
//     }

// })

module.exports = router