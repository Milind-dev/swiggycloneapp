import * as express from "express";
import * as mongoose from "mongoose";
import { getEnvironmentVariables } from "./environments/environment";
import UserRouter from "./routers/UserRouter";

export class Server {
  public app: express.Application = express();

  constructor() {
    this.setConfigs();
    this.setRoutes();
  }

  setConfigs() {
    this.connectMongoDB();
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
    this.app.use('/app/user/',UserRouter)
  }
}
