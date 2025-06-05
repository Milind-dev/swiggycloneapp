import * as express from 'express';

let app :express.Application = express();
app.listen(3000,() => {
    console.log('server start at 3000 ');
})