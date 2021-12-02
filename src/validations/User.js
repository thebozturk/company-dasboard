const Joi = require("joi");

const createValidation = Joi.object({
  name: Joi.string().required().min(3),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required()
    .min(8),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
});

const loginValidation = Joi.object({
  password: Joi.string().required().min(8),
  email: Joi.string().email().required().min(8),
});

module.exports = { createValidation, loginValidation };
