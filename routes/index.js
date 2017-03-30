var express = require('express');
var router = express.Router();


/* GET home page. */
router.get("/",function(req,res,next){
  res.render('index');
});

router.get("/story", function(req, res, next) {
  res.render('story');
});

router.get("/CSR", function(req, res, next) {
  res.render('CSR');
});

router.get("/contact", function(req, res, next) {
  res.render('contact');
});

router.get("/case_studies", function(req, res, next) {
  res.render('case_studies');
});

router.post('/index', function(req, res, next){
    res.redirect('/display');
});
module.exports = router;
