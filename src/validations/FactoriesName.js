const Joi = require("joi");

const createValidation = Joi.object({
  usedUnit: Joi.string().required().min(3),
  dateRange: Joi.date().required(),
  useOfKw: Joi.number().required(),
  usageFee: Joi.number().required(),
  discountedPrice: Joi.boolean().required(),
});

const updateValidation = Joi.object({
  usedUnit: Joi.string().required().min(3),
  dateRange: Joi.date().required(),
  useOfKw: Joi.number().required(),
  usageFee: Joi.number().required(),
  discountedPrice: Joi.boolean().required(),
});
module.exports = { createValidation, updateValidation };
