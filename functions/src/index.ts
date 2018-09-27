import * as functions from "firebase-functions";
/** @module bcrypt for password encryption and decryption */
import bcrypt = require("bcryptjs");
/** @module express for creating apis  */
import express = require("express");
/** @module bodyParser for parsing data from documents  */
import bodyParser = require("body-parser");

/** @constant jwt to generate sign token for authentication  */
const jwt = require("jsonwebtoken");

/** dbconnect url and cred*/
import { dbConnect } from "./dbconnectURI.const";

/** @module mongoose for db operations  */
import mongoose = require("mongoose");

/** @constant blog to save and update blogs in db using blog model  */
const blog = require("./dbconnect");

/** @constant auth to save and find user from db  */
const auth = require("./userSchema");
const db = dbConnect;
mongoose.Promise = global.Promise;
mongoose.connect(
  db,
  { useNewUrlParser: true },
  err => {
    if (err) {
      console.log("err in connection " + err);
    } else {
      console.log("db connected successfuly");
    }
  }
);

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

/** Authentication Login API*/
app.post("/login", (req, res) => {
  auth.findOne(
    {
      email: req.body.email
    },
    function(err, user) {
      if (err) {
        return res.status(500).json({
          title: "An error occured",
          error: err
        });
      }
      if (!user) {
        return res.status(401).json({
          title: "Login failed",
          error: {
            message: "Invalid Login credentials"
          }
        });
      }
      if (!bcrypt.compareSync(req.body.password, user.password)) {
        return res.status(401).json({
          title: "Login failed",
          error: {
            message: "Invalid Login credentials"
          }
        });
      }
      /* Signing user cred with token */
      var token = jwt.sign(
        {
          user: user
        },
        "secret",
        {
          expiresIn: 7200
        }
      );
      return res.status(200).json({
        message: "Successfully logged In",
        token: token,
        userId: user._id
      });
    }
  );
});

/* signup */
/** @constant passRegex for validating password  */
const passRegex = new RegExp(
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
);
app.post("/signup", (req, res) => {
console.log('signup')
  if (!passRegex.test(req.body.password)) {

    return res.status(400).json({
      title: "An error occured",
      message: `Password must contain 
        one uppercase english letter, 
        lower case english letter, 
        one digit, one special character and 
        minimum 8 character long `
    });
  }
  const user = new auth({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: bcrypt.hashSync(req.body.password, 10),
    email: req.body.email
  });

  return user.save((err, result) => {
    if (err) {
      return res.status(500).json({
        title: "An error occured",
        error: err
      });
    }

    return res.status(201).json({
      message: "user created",
      obj: result
    });
  });
});


/* Blog API */
/** Get Blogs  */
app.get("/blog", (req, res) => {
  blog.find({}).exec((err, blogs) => {
    if (err) {
      return res.status(500).json({ message: err });
    }
    return res.status(202).json({ message: "get blog success", blog: blogs });
  });
});

/** Add a new story  */
app.post("/addstory", (req, res) => {
  const newStory = new blog();
  newStory.title = req.body.title;
  newStory.story = req.body.story;
  newStory.imageUrl = req.body.imageUrl;

  newStory.save((err, insertStory) => {
    if (err) {
      return res.status(500).json({ message: err, reqTitle: req.body.title });
    }

    return res
      .status(201)
      .json({ message: "add blog success", blog: insertStory._id });
  });
});

/** Update Story  */
app.put("/updateblog/:id", (req, res) => {
  blog.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        title: req.body.title,
        imageUrl: req.body.imageUrl,
        story: req.body.story
      }
    },
    {
      new: true
    },
    (err, updateBlog) => {
      if (err) {
        return res.status(500).json({ message: err });
      }
      return res
        .status(202)
        .json({ message: "update blog success", blog: updateBlog._id });
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  blog.findByIdAndRemove(req.params.id, (err, delBlogs) => {
    if (err) {
      return res.status(500).json({ message: err });
    }

    return res
      .status(202)
      .json({ message: "delete blog success", blog: delBlogs._id });
  });
});

exports.blogapi = functions.https.onRequest(app);
