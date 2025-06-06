import * as express from "express";

let app: express.Application = express();

app.listen(3000, () => {
  console.log("server start at 3000 ");
});

function is_MathByX_Available() {
  return false;
}
function is_MathByY_Available() {
  return false;
}
function is_SciByX_Available() {
  return false;
}
function is_SciByY_Available() {
  return false;
}

function resultMathsBooks() {
  return new Promise((resolve, reject) => {
    if (is_MathByX_Available()) {
      resolve(true);
    } else if (is_MathByY_Available()) {
      resolve(true);
    } else {
      reject(false);
    }
  });
}
function resultScienceBook(): Promise<string> {
  return new Promise((resolve, reject) => {
    if (is_SciByX_Available()) {
      resolve("is_SciByX_Available");
    } else if (is_SciByY_Available()) {
      resolve("is_SciByY_Available");
    } else {
      reject("Books are not available");
    }
  });
}

resultMathsBooks().then((result) => {
    console.log("result");
    if(result){
     resultScienceBook().then(data => {
        console.log(data);
     }).catch(e=>{
        console.log(e);
     })
    }
}).catch((error) => {
    console.log(error);
})


async function final(){
    try {
        let result1 = await resultMathsBooks();
        if(result1){
            result1 = await resultScienceBook();
            return result1;
        }
    } catch (error) {
        // console.log(error);
        return Promise.reject(error);
    }
}

final().then((data) => {
    console.log("data", data);
}).catch(e =>{
    console.log(e);
    
})