import User from "../models/User";

export class UserController {
    static signup(req, res, next)  {
            // console.log(req.query.email);
            // const data = { name: "techyks", email: "milinddev101@gmail.com" };
            // res.status(200).send(data);

            // (req as any).errorStatus = 422
            // const error = new Error('User email or password doesnot match');
            // next(error);
     
            // res.send(req.body);
            // res.send(req.query)

            const email = req.body.email;
            const password = req.body.password;
            const name = req.body.name;
            if(!email){
                const error  = new Error('email is required');
                next(error);
            }
            else if(!password){
                const error = new Error('password is required');
                next(error);
            }
            else if(!name){
                const error = new Error('Name is required');
                next(error);                
            }

            const user = new User({
                email,
                password
            })

            user.save().then((user) => {
                console.log("uesr", user)
                res.send(user)
            }).catch(e => {
                // const error = new Error(e);
                next(e);

            })

            



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