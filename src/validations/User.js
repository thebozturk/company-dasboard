const Joi = require("joi");

const createValidation = Joi.object({
  name: Joi.string().required().min(8),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required()
    .min(8),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
});

module.exports = { createValidation };
