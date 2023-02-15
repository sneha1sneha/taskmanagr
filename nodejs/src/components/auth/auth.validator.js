const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));

const options = {
  errors: {
    wrap: {
      label: ''
    }
  }
};
// .pattern(/^[6-9]\d{9}$/)
const validateLogin = (httpRequest) => {
  const schema = Joi.object({
    username: Joi.string()
      .required()
      .messages({
        'string.pattern.base': 'Provide valid username'
      }),
    password: Joi.string().min(7)
  });
  return schema.validate(httpRequest.body, options);
};

const validateRegistration = (httpRequest) => {
  console.log(httpRequest)
  const schema = Joi.object({

    username: Joi.string()
      .required(),
    first_name: Joi.string()
      .required(),
    last_name: Joi.string()
      .required(),
    email: Joi.string()
      .pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      // .required()
      .messages({
        'string.pattern.base': 'Provide valid email!'
      }),
    password: Joi.string().min(7)
  });
  return schema.validate(httpRequest.body, options);
};

module.exports = {
  validateLogin,
  validateRegistration
};
