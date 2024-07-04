const mongoose=require('mongoose');
const StudentSchema=mongoose.Schema({
    fname:String,
    age:Number,
    location:String
})
const StudentData=mongoose.model('studentdetail',StudentSchema);
module.exports=StudentData