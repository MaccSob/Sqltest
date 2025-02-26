const { Router } = require("express");
const express = require('express');
const app = express();
const indexRouter = Router();



app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));


indexRouter.get('/', (req, res) => {
    res.status(200);
    res.send("Welcome to root URL of Server");
  });
 

  indexRouter.get('/new', (req, res) => {
    res.status(200);
    res.render("new", { title: "Create your message!" });

  });
  indexRouter.post("/new", function(req, res ) {
    const data = req.body;

    console.log("Text: ", data.messageText);
    console.log("User: ", data.messageUser);
    console.log("Date: ", new Date());
  });

  module.exports = indexRouter;