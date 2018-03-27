import * as express from "express";
import * as path from "path";
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.redirect('index.html');
});

module.exports = router;
