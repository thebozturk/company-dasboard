const Joi = require("joi");

const createValidation = Joi.object({
  factoryName: Joi.string().required().min(3),
  membershipDate: Joi.date().required(),
  membershipExpirationDate: Joi.date().required(),
  numberOfEmployees: Joi.number().required(),
  specialMember: Joi.boolean().required(),
});
module.exports = { createValidation };
