var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next) {
    resizeBy.send("API is working properly");
});

module.exports = router;