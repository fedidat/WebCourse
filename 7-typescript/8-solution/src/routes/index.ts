import * as express from "express";
import * as path from "path";
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  if(!req.cookies || !req.cookies['user']) {
    if(req.url === 'signin.html') {
      res.redirect('signin.html');
    }
    res.redirect('signin.html?redirect=' + req.url);
  }
  else {
    next();
  }
});

module.exports = router;
