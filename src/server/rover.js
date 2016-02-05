var newRover = function(x, y, facing) {
    return {
        position: {
            x: parseInt(x, 10),
            y: parseInt(y, 10)
        },
        facing: facing
    };
};

var calulateMovement = function(facing) {
    return 'E' === facing || 'N' === facing ? 1 : -1;
};

var move = function(rover, movement) {
    if ('N' === rover.facing || 'S' === rover.facing) {
        return newRover(rover.position.x, rover.position.y + movement, rover.facing);
    } else {
        return newRover(rover.position.x + movement, rover.position.y, rover.facing);
    }
};

var moveForward = function(rover) {
    var offset = calulateMovement(rover.facing);
    return move(rover, offset);
};

var orientations = 'NESW';
var rotate = function(facing, change) {
    var index = orientations.indexOf(facing);
    return orientations[(index + change + orientations.length) % orientations.length];
};

var rotateRigth = function(rover) {
    var facing = rotate(rover.facing, 1);
    return newRover(rover.position.x, rover.position.y, facing);
};

var rotateLeft = function(rover) {
    var facing = rotate(rover.facing, -1);

    return newRover(rover.position.x, rover.position.y, facing);
};

var supportedActions = {
    M: moveForward,
    R: rotateRigth,
    L: rotateLeft
};

var moveRover = function(rover, instructions) {
    if (instructions.length > 0) {
        var action = supportedActions[instructions[0]];
        var newRover = action ? action(rover) : rover;
        return moveRover(newRover, instructions.substring(1));
    } else {
        return rover;
    }
};

module.exports.newRover = newRover;
module.exports.moveRover = moveRover;
