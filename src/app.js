const express = require("express");
require("./db/connection");
const Student = require ("./models/student");
const studentRouter = require("./routers/routes");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(studentRouter);

app.listen(port, ()=>{
    console.log (`connection is setup at ${port}`);
});

