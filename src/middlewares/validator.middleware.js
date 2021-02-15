import Joi from '@hapi/joi';
import { BadRequest } from '../helpers/errorHandler';

const validator = {
  validateParam: (schema) => (req, res, next) => {
    const result = schema.validate(req.params);
    if (result.error) {
      throw new BadRequest(result.error.message, null);
    }
    req.params = result.value;
    return next();
  },

  validateBody: (schema) => (req, res, next) => {
    const result = schema.validate(req.body);
    if (result.error) {
      throw new BadRequest(result.error.message, null);
    }
    req.body = result.value;
    return next();
  },

  schemas: {
    subSchema: Joi.object().keys({
      url: Joi.string().uri().required().trim()
        .lowercase()
        .error(new Error('A valid Url is required'))
    }),
    pubSchema: Joi.object().keys({
      message: Joi.string().required().trim().lowercase()
        .error(new Error('A valid message is required'))
    }),
    topicSchema: Joi.object().keys({
      topic: Joi.string().required().trim().lowercase()
        .error(new Error('A valid topic is required'))
    })
  },
};

export default validator;