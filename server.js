// -------------------------------------------------
// Include Server Dependencies
// -------------------------------------------------
const express = require("express");
// const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
// const bluebird = require("bluebird");
const logger = require("morgan");
const mongoose = require("mongoose");
const request = require("request");
const routes = require("./routes/routes");

// Sets an initial port. We'll use this later in our listener
const PORT = process.env.PORT || 3000;
// mongoose.Promise = bluebird;
// Create a new express app
const app = express();
// Run Morgan for Logging
app.use(logger("dev"));
// -------------------------------------------------

// Requiring the Article model
const Article = require("./models/articleModel.js");
// -------------------------------------------------


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("./public"));
app.use(express.static(__dirname + '/public'));

app.use(express.static("/public"));
app.use("/", routes);

// -------------------------------------------------
// MongoDB configuration
// -------------------------------------------------

if (process.env.NODE_ENV == 'production') {
    mongoose.connect("mongodb://heroku_ss9vnr07:hcfvfvote8cqjg9i06fn703ra6@ds161041.mlab.com:61041/heroku_ss9vnr07");
} else {
    mongoose.connect("mongodb://localhost/NYTdb");
}
const db = mongoose.connection;

db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});

db.once("open", function() {
    console.log("Mongoose connection successful.");
});

// -------------------------------------------------
// ROUTES
// -------------------------------------------------
app.get('/', function(req, res){
  res.sendFile('./public/index.html');
})

app.get('/api/articles', function(req, res) {

  Article.find({})
    .exec(function(err, doc){

      if(err){
        console.log(err);
      }
      else {
        res.send(doc);
      }
    })
});

// app.post('/api/articles', function(req, res){

//   var newArticle = new Article({
//     title: req.body.title,
//     date: req.body.date,
//     url: req.body.url
//   });

//   newArticle.save(function(err, doc){
//     if(err){
//       console.log(err);
//       res.send(err);
//     } else {
//       res.json(doc);
//     }
//   });

// });

app.delete('/api/articles/:id', function(req, res){

  Article.find({'_id': req.params.id}).remove()
    .exec(function(err, doc) {
      res.send(doc);
  });

});


// -------------------------------------------------

// Starting our express server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
