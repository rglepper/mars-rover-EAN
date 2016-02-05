var router = require('express').Router();
var four0four = require('./utils/404')();
var rover = require('./rover');

router.get('/x/:x/y/:y/facing/:facing/instructions/:instructions', moveRover);
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

function moveRover(req, res, next) {
    var r = rover.newRover(req.params.x, req.params.y, req.params.facing);
    if (r) {
        res
        .status(200)
        .send(rover.moveRover(r, req.params.instructions));
    } else {
        four0four.send404(req, res, 'No rover');
    }
}
