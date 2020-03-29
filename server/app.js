"use strict";
const express =  require("express");
const cors =  require("cors");
const bodyparser  =  require("body-parser");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger/swagger.json");

const app = express();

app.use(cors());





process.env.NODE_ENV =  process.env.NODE_ENV||"local";
// process.env.NODE_ENV =  process.env.NODE_ENV||"staging";
//process.env.NODE_ENV =  process.env.NODE_ENV||"prod";



const config = require("./config/config");
require("./db/db").DBConnectMongoose();

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }));

app.use("/apiDocs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/uploads", express.static(path.join(__dirname, "./app/uploads")));

app.use(express.static(path.join(__dirname, "client")));

// app.use('/api', require('./app/controller/routes',express));

app.use("/api",require("./app/controller/routes")(express))


app.use(function(req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    // Set custom headers for CORS
    res.header(
      "Access-Control-Allow-Headers",
      "Content-type,Accept,X-Access-Token,X-Key,If-Modified-Since,Authorization,multipart/form-data"
    );
  
    if (req.method == "OPTIONS") {
      res.status(200).end();
    } else {
      next();
    }
});
 
app.use(bodyparser.json())


app.use("/", function(req, res) {
  // res.sendFile(path.join(__dirname, './dist/frontend', 'index.html'));
  res.sendFile(__dirname + '/client/index.html');
});


app.get("/", (req,res)=>{
    console.log("connected server")
res.send("sever started");
})

var port = config.port;

app.listen( port);

console.log("Available on port "+port ||3000);