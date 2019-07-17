var express = require('express');
var router = express.Router();


const routes = [
  {"route": "", "ejs": "index"},
  {"route": "cart", "ejs": "cart"},
  {"route": "product", "ejs": "product"},
  {"route": "checkout", "ejs": "checkout"},
  {"route": "category", "ejs": "category"},
]


/* GET home page. */
routes.map(e => {
  router.get('/' + e.route, function(req, res, next) {
    res.render(e.ejs, { title: e.ejs });
  });
})


module.exports = router;
