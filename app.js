const express=require('express')
const app=new express();
require('./connection')
app.get('/login',(req,res)=>{
    res.send('This is a login page')
})
app.get('/',(req,res)=>{
    res.send('This is homepage')
})
app.use(express.json())
const StudentModel=require('./model/StudentData')
app.get('/students',async (req,res)=>{
    try {
        const data= await StudentModel.find();
    res.send(data);
        
    } catch (error) {
        res.send('Data not found');
        
    }
    
})
//Post API
app.post('/addstudent',async(req,res)=>{
    try {
        var item=req.body;
        const datasave=new StudentModel(item);
        const saveddata= await datasave.save();
        res.send('Post successful')
        
    } catch (error) {
        console.log(error)
        
    }
})
//Update API
app.put('/studentedit/:id',async(req,res)=>{
    try {
        const data= await StudentModel.findByIdAndUpdate(req.params.id,req.body);
        res.send('Updated successfully')
        
    } catch (error) {
        console.log(error)
        
    }
})
//delete api
app.delete('/removestudent/:id',async(req,res)=>{
    try {
        await StudentModel.findByIdAndDelete(req.params.id);
    res.send("Deleted successfully")
        
    } catch (error) {
        console.log(error)
        
    }
    
})


app.listen(3000,()=>{
    console.log('The server is running on Port 3000')
})