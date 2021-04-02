const express = require("express")
const mongoose = require("mongoose")
const url = 'mongodb+srv://Harshavardhan:Harsha@1@cluster0.f5e7u.mongodb.net/test?retryWrites=true&w=majority'
const app = express()
let PORT = process.env.PORT || 3000;

mongoose.connect(url, {useNewUrlParser:true,useUnifiedTopology:true}).catch(error => log.console(error));

const con = mongoose.connection
con.on('open',  ()=> { console.log("Connected to Database....")  } )

app.use(express.json())
const todopath = require("./routes/func")
app.use('/',todopath)


app.listen(PORT, () => console.log("Server Started ...."))