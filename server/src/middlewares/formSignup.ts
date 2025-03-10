import type { RequestHandler } from "express";
import Joi from "joi";
import hashPassword from "./hashPassword";

const signupSchema = Joi.object({
  first_name: Joi.string().min(3).max(50).required().messages({
    "string.empty": "le champ est obligatoire",
    "string.min": "minumum 3 characters",
    "string.max": "maximum 50 characters",
  }),
  last_name: Joi.string().min(3).max(50).required().messages({
    "string.empty": "le champ est obligatoire",
    "string.min": "minumum 3 characters",
    "string.max": "maximum 50 characters",
  }),
  email: Joi.string().email().required().messages({
    "string.empty": "le champ est obligatoire",
    "string.email": "email incorrect",
  }),
  password: Joi.string().min(8).max(50).required().messages({
    "string.empty": "le champ est obligatoire",
    "string.min": "minumum 8 characters",
    "string.max": "maximum 50 characters",
  }),
  confirmPassword: Joi.string().min(8).max(50).required().messages({
    "string.empty": "le champ est obligatoire",
    "string.min": "minumum 8 characters",
    "string.max": "maximum 50 characters",
  }),
});

const validate: RequestHandler = (req, res, next) => {
  const { error } = signupSchema.validate(req.body);
  if (error) {
    res.json({ error: error.details[0].message });
  } else {
    next();
  }
};

export default { validate };
