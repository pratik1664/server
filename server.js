require('dotenv').config();
const express = require('express');
var bodyParser = require("body-parser");
let app = express();
const http = require('http');
const connectDB = require('./db/db');
const route = express.Router()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


// // get route
// route.get('/', (req, res, next) => {
//     const file = path.join(__dirname, '/index.html')
//     res.sendFile(file);

//     res.status(200).send({
//         message: "get success",
//     })
// })


// // post route 
// route.post("/getuser", (req, res, next) => {
//     let total = num1 * num2;
//     total = req.body;
//     console.log(req.body);

//     res.status(200).send({
//         message: "post success",
//         data: total
//     })
// })

// database connect 
connectDB()

app.use('/v1', route);

app.use(route);
http.createServer().listen(process.env.PORT, () => {
    console.log("server started");
})