var express = require("express");
var mongoose = require("mongoose");
var passport = require("passport");
var bodyParser = require("body-parser");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
var User = require("./models/userModel").default;
var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("express-session")({
secret: "node js mongodb",
resave: false,
saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//=====================
// ROUTES
//=====================
// Showing home page
app.get("/", function (req, res) {
res.render('register', {
title: 'Registration Page',
name: '',
email: '',
password: ''    
})
});
// Showing secret page
app.get("/home", isLoggedIn, function (req, res) {
res.render("home");
});
// Showing register form
app.get("/register", function (req, res) {
res.render('register', {
title: 'Registration Page',
name: '',
email: '',
password: ''    
})
});
// Handling user signup
app.post("/register", function (req, res) {
var email = req.body.email
var password = req.body.password
User.register(new User({ email: email }),
password, function (err, user) {
if (err) {
console.log(err);
return res.render("register");
}
passport.authenticate("local")(
req, res, function () {
req.flash('success', 'You have logged in')
res.render("home");
});
});
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
console.log("Server Has Started!");
});