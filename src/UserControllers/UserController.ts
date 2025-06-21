import { validationResult } from "express-validator";
import User from "../models/User";

export class UserController {
  static signup(req, res, next) {
    const errors = validationResult(req);
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.phone;
    const type = req.body.type;
    const status = req.body.status;

    if (!errors.isEmpty()) {
      // return res.status(400).json({errors:errors.array().map(x => x.msg)});
      return next(new Error(errors.array()[0].msg));
    }

    const data = {
      email,
      phone,
      password,
      name,
      type,
      status,
    };

    // const user = new User({
    //     email,
    //     password,
    //     name
    // })

    let user = new User(data);
    user
      .save()
      .then((user) => {
        console.log("uesr", user);
        res.send(user);
      })
      .catch((e) => {
        // const error = new Error(e);
        next(e);
      });
  }
}
