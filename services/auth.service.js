const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const createUser = async(body) => {

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.password, salt);
    const user = await User.create({...body, password: hashedPassword});
    console.log(user);
    return user;
}

const findUser = async(filter) => User.findOne(filter);

const logIn = async(email, password, user) => {
    const passwordMatch = await bcrypt.compare(password, user.password);
    if(!passwordMatch) throw new Error('Invalid Password');
    const accessToken = jwt.sign({ userId: user._id}, process.env.ACCESS_TOKEN);
    console.log(accessToken);
    return accessToken;
}

module.exports = {
    findUser,
    logIn,
    createUser
}