const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser")
const userRoutes = require("./routes/user")
const path = require("path")

app.use(cors());
app.use(bodyParser.json())

app.use("/api",userRoutes)

const port = process.env.PORT ||  5301

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(port, ()=> console.log(`Server is up and running at port ${port}`))