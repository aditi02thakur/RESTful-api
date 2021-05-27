const mongoose = require ("mongoose");

mongoose.connect("mongodb://localhost:27017/students-api",{
    useUnifiedTopology: true, 
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify:false
})
.then(()=>{
    console.log ("connection is successful");
}).catch((err)=>{
    console.log(`error occurred : ${err}`)
});
