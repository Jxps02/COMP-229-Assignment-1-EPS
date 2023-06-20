var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home',});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home',});
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About',});
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects',});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services',});
});


/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact',});
});

router.post('/contact', (req, res) => {
  // Retrieve form data
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const contactNumber = req.body.contactNumber;
  const emailAddress = req.body.emailAddress;
  const message = req.body.message;

  // Process the form data (e.g., save to database, send an email, etc.)

  // Redirect back to the home page
  res.redirect('/');
});


module.exports = router;
