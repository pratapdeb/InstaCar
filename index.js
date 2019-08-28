let  express = require('express');
let app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Deb:notapassword@cluster0-t01gy.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true,useCreateIndex:true});
let aproute  = require('./src/routes/ap_index');
const bodyPerser = require('body-parser');
app.use(bodyPerser.json());
app.use('/ap_index',aproute);

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log('server started on port' + port);
    
})

