const Joi = require('joi')


exports.rentalFormValidation = (data) => {
    const schema = Joi.object({
      name:Joi.string().required(),
      email:Joi.string().required(),
      phone:Joi.string().max(10).min(10).required(),
      date:Joi.string().required(),
      time:Joi.string().required()
    });
    return schema.validate(data);
  };