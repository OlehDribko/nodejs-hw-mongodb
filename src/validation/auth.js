import Joi from 'joi';

export const logInUserSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export const registerUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});
