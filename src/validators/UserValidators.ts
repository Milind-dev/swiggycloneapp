import { body } from "express-validator";

export class UserValidators {
  static signup() {
    return [
      body('name', 'Name is required').isString(),
      body('phone', 'phone is required').isString(),
      body('email', 'email is required').isEmail(),
      body('password', 'Password is required')
        .isAlphanumeric()
        .isLength({ min: 8, max: 25 })
        .withMessage('password must be 8-25 character'),
      body('type', 'user role type is required').isString(),
      body('status', 'user status  is required').isString()
    ];
  }
}
