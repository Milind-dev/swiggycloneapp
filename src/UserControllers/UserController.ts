export class UserController {
    static login(req, res, next)  {
            // console.log(req.query.email);
            // const data = { name: "techyks", email: "milinddev101@gmail.com" };
            // res.status(200).send(data);

            // (req as any).errorStatus = 422
            // const error = new Error('User email or password doesnot match');
            // next(error);
     
            res.send(req.body);
        }
    static test1(req, res, next) {
            console.log("test");
                (req as any).msg = 'This is a test1';
                next(); 
    }

    static test2(req, res) {
            // console.log("test");
                res.send((req as any).msg);
    }        
}