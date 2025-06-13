import * as express from "express";
import * as mongoose from "mongoose";
import * as bodyParser from 'body-parser';
import { getEnvironmentVariables } from "./environments/environment";
import UserRouter from "./routers/UserRouter";
import { error } from "console";

export class Server {
  public app: express.Application = express();

  constructor() {
    this.setConfigs();
    this.setRoutes();
    this.error04Handler();
    this.handleError();
  }

  setConfigs() {
    this.connectMongoDB();
    this.configBodyParser();
     
  }
  connectMongoDB() {
    mongoose
      .connect(getEnvironmentVariables().db_url)
      .then(() => {
        console.log("mongo connect");
      })
      .catch((err) => console.error("MongoDB connection error:", err));
  }

  setRoutes() {
    this.userRoutes();
  }
  
  userRoutes() {
    this.app.use("/app/user", UserRouter);
  }
  
 configBodyParser(){
    this.app.use(bodyParser.urlencoded({
      extended:true
    }));
  }
  error04Handler(){
    this.app.use((req,res) => {
      res.status(404).json({
        message:"Not found",
        status_code:'404'
      })
    })
  }
  
  handleError(){
    this.app.use((error,req,res,next) => {
      const errorStatus = req.errorStatus || 500;
      res.status(errorStatus).json({
        message:error.message || 'Something went wrong please try again', 
        status_code:errorStatus
      })
    })
  }
 
}
 