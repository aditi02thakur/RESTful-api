const mongoose = require ("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name : {
        type :String,
        minlength:3
    },
    email:{
        type : String , 
        unique:[true, "Email id already present"],
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error ("Invalid Email")
            }
        }
    }, phone :{
        type :Number,
        minlength: 10, 
        maxlength: 10,
        unique:true
    },
    city:{
        type :String ,
    }
})

const Student = new mongoose.model('Student',studentSchema);

module.exports = Student;





