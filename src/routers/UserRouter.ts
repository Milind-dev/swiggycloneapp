import { Router } from "express";

class UserRouter {
    public router : Router;
    
    constructor(){
        this.router = Router()
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.putRoutes();
        this.deleteRoutes();
        
    }
    getRoutes(){
            this.router.get("/login", (req, res) => {
            // console.log(req.query.email);
            const data = { name: "techyks", email: "milinddev101@gmail.com" };
            res.status(200).send(data);
            });

            this.router.get('/test', (req, res, next) => {
            console.log("test");
                (req as any).msg = 'This is a test'
                next(); 
            },(req,res) => {
                res.send((req as any).msg);

            });
    }
    postRoutes(){
    }
    putRoutes(){
    }
    patchRoutes(){
    }
    deleteRoutes(){
    }
}

export default new  UserRouter().router;