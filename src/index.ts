import * as express from "express";
import * as mongoose from 'mongoose'; 
import { getEnvironmentVariables } from "./environments/environment";


let app: express.Application = express();


app.listen(3000, () => {
  console.log("server start at 3000 ");
});
// console.log(process.env.NODE_ENV);


mongoose.connect(getEnvironmentVariables().db_url)
.then(()=>{
  console.log("mongo connect");
})  .catch(err => console.error("MongoDB connection error:", err));


// app.use((req,res,next) => {
//   console.log("middleware");
//   next();
// })

app.get('/api/user/login',(req,res) =>{
  console.log(req)
  const data = {name:'techyks',email:'milinddev101@gmail.com'}
  // res.json({
  //   name:'miind',
  //   email:'milind@gmail.com'
  // })
  res.status(200).send(data);
})

app.get('/api/user/test',(req,res,next) =>{
  console.log('test');
  res.send('test');
})

app.use((req,res,next) => {
  console.log('middleware 2')
  next()
})





// 9WPNUsm7K3yxRV2e