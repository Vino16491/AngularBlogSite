import * as functions from 'firebase-functions';
/** module for password encryption and decryption */
import bcrypt = require("bcryptjs");
/** module for creating apis  */
import express = require("express");
/** module for parsing data from documents  */
import bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.get('/blog',(req, res)=>{
    res.status(201).json({message:'getBlogs'})
})
app.post('/addstory',(req, res)=>{res.status(201).json({message:'addStory'})})
app.put('/updateblog',(req,res)=>{res.status(201).json({message:'updateBlogs'})})
app.delete('/delete',(req,res)=>{res.status(201).json({message:'delteBlogs'})})





exports.blogapi = functions.https.onRequest(app)
