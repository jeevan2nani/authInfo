const Joi = require('joi');

const signUp = {
    body: Joi.object().keys({
        email: Joi.string().email().required(),
        name: Joi.string().required(),
        password: Joi.string().required(),
    }),
}

const logIn = {
    body: Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    })
}

module.exports = {
    signUp,
    logIn,
};