import * as express from "express";

let app: express.Application = express();

app.listen(3000, () => {
  console.log("server start at 3000 ");
});


app.get('/api/user/login',(req,res) =>{
  console.log(req)
  // const data = {name:'techyks',email:'milinddev101@gmail.com'}
  res.json({
    name:'miind',
    email:'milind@gmail.com'
  })
  res.status(200).send(res);
})