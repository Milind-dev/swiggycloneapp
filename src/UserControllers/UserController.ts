import User from "../models/User";
import { Utils } from "../Utils/Utils";

export class UserController {
  static async signup(req, res, next) {
    // console.log(Utils.generateVerificationToken());

    // const errors = validationResult(req);
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const password = req.body.password;
    const type = req.body.type;
    const status = req.body.status;

    // if (!errors.isEmpty()) {
    //   // return res.status(400).json({ errors: errors.array().map(x => x.msg) });
    //   return next(new Error(errors.array()[0].msg));
    // }

    const data = {
      email,
      verification_token: Utils.generateVerificationToken(5),
      verification_token_time: Date.now() + new Utils().MAX_TOKEN_TIME,
      password,
      name,
      type,
      status,
      phone,
    };
    try {
      const user = await new User(data);
      res.send(user);
    } catch (error) {
      next(error);
    }
  }

  static  async verify(req, res, next) {
    const verification_token = req.body.verification_token;
    const email = req.body.email;
    try {
      //instead of findone use findoneupdate
         const user = await User.findOneAndUpdate({
            email:email,
            verification_token:verification_token,
            verification_token_time:{$gt:Date.now()}
          },
          {
            email_verified:true
          }
        )
          if(user){
            //user update & send
          }
          else{
            throw new Error('Email Verification Token Is Expired Please try again...');
          }
        } catch (e) {
          next(e)
        }

  }

  static test1(req, res, next) {
    console.log("test");
    (req as any).msg = "This is a test";
    next();
  }

  static test2(req, res) {
    res.send((req as any).msg);
  }
}
