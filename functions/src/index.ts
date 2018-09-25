import * as functions from "firebase-functions";
/** module for password encryption and decryption */
import bcrypt = require("bcryptjs");
/** module for creating apis  */
import express = require("express");
/** module for parsing data from documents  */
import bodyParser = require("body-parser");

/* dbconnect */
import { dbConnect } from "./dbconnectURI.const";
import mongoose = require("mongoose");
const blog = require("./dbconnect");
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
