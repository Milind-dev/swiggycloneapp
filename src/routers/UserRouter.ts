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
            this.router.get("/api/user/login", (req, res) => {
            // console.log(req.query.email);
            const data = { name: "techyks", email: "milinddev101@gmail.com" };
            res.status(200).send(data);
            });

            this.router.get("/api/user/test", (req, res, next) => {
            console.log("test");
            res.send("test");
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