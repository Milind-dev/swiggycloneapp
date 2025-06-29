import { UserValidators } from './../validators/UserValidators';
import { UserController } from './../UserControllers/UserController';
import { Router } from "express";
import { GlobalMiddleware } from '../middleware/GlobalMiddleware';

class UserRouter {

    public router: Router;

    constructor() {
        this.router = Router();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.putRoutes();
        this.deleteRoutes();
    }

    getRoutes() {
        this.router.get('/test', UserController.signup, GlobalMiddleware.checkError,UserController.test1, UserController.test2);
    }
    
    postRoutes() {
        // this.router.post('/signup', UserValidators.signup(), UserController.signup);    
        this.router.patch('/verify', UserValidators.verifyUserEmail(), GlobalMiddleware.checkError ,UserController.verify);    
            
    }

    patchRoutes() {}

    putRoutes() {}

    deleteRoutes() {}

}

export default new UserRouter().router;