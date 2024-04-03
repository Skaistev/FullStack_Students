import  Express  from "express";
import cors from "cors";
// import students from "./data.js"
// import PageStudents from './PageStudents.js'

const students = [{
    name: "Antanas",
    gruop: "pomidorai",
    marks: [5,10,2,6]
},
{
    
}]





const PORT = 4832;
const app = Express ();

const corsOptions = {
 origin: 'http://localhost:4831',
}

app.use(cors(corsOptions));

app.get ('/', (req,res)=> {
    return res.send ("home page")
});



app.get ('/api/student',(req, res)=> {
    return res.send (students)
        
    });

app.listen(4832,()=>{
    console.log(`http://localhost:${PORT}`)
})