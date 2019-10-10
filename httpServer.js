gitconst express = require('express');
const app = express(); 

const userRouter = require('./routs/user');
app.use('/user',userRouter);

app.set('view engine','ejs');

app.listen(3000,()=>{
    console.log('listening on port 3000');
})