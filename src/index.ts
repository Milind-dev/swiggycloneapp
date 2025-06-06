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

// function resultMathsBooks(): Promise<string> {
//   return new Promise((resolve, reject) => {
//     if (is_MathByX_Available()) {
//       resolve("is_MathByX_Available");
//     } else if (is_MathByY_Available()) {
//       resolve("is_MathByY_Available");
//     } else {
//       reject("both books are not available");
//     }
//   });
// }
// function resultScienceBook(): Promise<string> {
//   return new Promise((resolve, reject) => {
//     if (is_MathByX_Available()) {
//       resolve("is_MathByX_Available");
//     } else if (is_MathByY_Available()) {
//       resolve("is_MathByY_Available");
//     } else {
//       reject("both books are not available");
//     }
//   });
// }
function result(): Promise<string> {
  return new Promise((resolve, reject) => {
    if (is_MathByX_Available()) {
      resolve("is_MathByX_Available");
    } else if (is_MathByY_Available()) {
      resolve("is_MathByY_Available");
    } else {
      reject("both books are not available");
    }
  });
}

// result()
//   .then((result) => console.log(result))
//   .catch((error) => console.log("error: ", error));


  async function final(){
    try{
        const result1 = await result();
        return result1;
    }
    catch(e){
        // console.log(e);
        return Promise.reject(e);
    }
}
final().then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e)
})