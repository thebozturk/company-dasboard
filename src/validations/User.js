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
  role: Joi.required(),
});

const loginValidation = Joi.object({
  password: Joi.string().required().min(8),
  email: Joi.string().email().required().min(8),
});

const updateValidation = Joi.object({
  name: Joi.string().min(3),
  email: Joi.string()
    .email({ tlds: { allow: ["com", "net"] } })
    .required(),
});

module.exports = { createValidation, loginValidation, updateValidation };
