import { validationResult } from "express-validator";

export class GlobalMiddleware {
 static checkError(req,res,next){
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // return res.status(400).json({ errors: errors.array().map(x => x.msg) });
      return next(new Error(errors.array()[0].msg));
    }

 }
}