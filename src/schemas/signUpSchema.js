import * as Joi from 'joi';

export const usernameSchema = Joi.string().alphanum().required().min(4);
export const emailSchema = Joi.string()
  .required()
  .email({ tlds: { allow: false } });

export const passwordSchema = Joi.string()
  .required()
  .min(8)
  .pattern(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
  )
  .message('Capitals and special characters are required');

export default Joi.object({
  username: usernameSchema,
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: passwordSchema,
});
