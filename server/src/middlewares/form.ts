import type { RequestHandler } from "express";
import Joi from "joi";

const movieSchema = Joi.object({
  title: Joi.string().min(1).max(50).required().messages({
    "string.min": "Le titre doit contenir au moins 1 caractère",
    "string.max": "Le titre doit contenir au maximum 50 caractères",
  }),
  release_year: Joi.number().required(),
  synopsis: Joi.string().required(),
  duration: Joi.number().required().messages({
    "number.base": "la durée doit être au format 00:00:00",
  }),
  production: Joi.string().required(),
  casting: Joi.string().required(),
  poster: Joi.string().required().messages({
    "string.base": "le poster doit être une URL",
  }),
  trailer: Joi.string().required().messages({
    "string.base": "le trailer doit être un lien vers une vidéo",
  }),
  landscape_image: Joi.string().required().messages({
    "string.base": "l'image de fond doit être au format paysage en URL",
  }),
});

const validate: RequestHandler = async (req, res, next) => {
  const { error } = movieSchema.validate(req.body);
  if (error) {
    res.json({ error: error.details[0].message });
  } else {
    next();
  }
};
export default { validate };
