import { Router } from "express";
import { UserController } from "../UserControllers/UserController";
import User from "../models/User";
import { UserValidators } from "../validators/UserValidators";
// import { body , validationResult} from "express-validator";


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
            this.router.post("/signup",UserValidators.signup(),UserController.signup);
            this.router.get('/test', UserController.signup,UserController.test1,UserController.test2);
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