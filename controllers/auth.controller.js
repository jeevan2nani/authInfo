const authService = require('../services/auth.service');
const catchAsync  = require('../utils/catchAsync');

const createUser = catchAsync( async ( req, res) => {
    const { body } = req;
    console.log(body);
    const user = await authService.findUser({email: body.email});
    if(user){
        throw new Error('User with Email Exists');
    }
    const createdUser = await authService.createUser(body);
    res.send(createdUser);
});

const logIn = catchAsync( async (req, res) => {
    const { email, password } = req.body;
    const user = await authService.findUser({email});
    if(!user){
        throw new Error('User Not Found');
    }
    const accessToken = await authService.logIn(email,password, user);
    res.send({accessToken});
});

module.exports = {
    createUser,
    logIn,
}
