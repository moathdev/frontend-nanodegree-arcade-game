// Enemies our player must avoid

var Enemy = function(x, y, sprite) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.sprite = 'images/enemy-bug.png';
    this.speed = 100;
};


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    if (this.x >= 505) {
        this.x = 0;
    };
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x, y, sprite){
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
    this.speed = 2;
};

Player.prototype.update = function(dt) {
    // this.x = this.x + this.speed * dt;
    // this.y = this.y + this.speed * dt;

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


var player = new Player(200, 400);

Player.prototype.handleInput = function(keypress) {
    if (keypress === 'left' && this.x > 0) {
        this.x -= 50;
    } else if (keypress === 'right' && this.x < 200) {
        this.x += 50;
    } else if (keypress === 'up' && this.y > 0) {
        this.y -= 50 ;
    } else if (keypress === 'down' && this.y < 400 ) {
        this.y += 50;
    } else {
        return false;
    }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


var enemy1 = new Enemy(-325, 50);
var enemy2 = new Enemy(-270, 150);
var enemy3 = new Enemy(-100, 220);
var enemy4 = new Enemy(0, 150);
var enemy5 = new Enemy(-150, 50);

var allEnemies = [];
allEnemies.push(enemy1);
allEnemies.push(enemy2);
allEnemies.push(enemy3);
allEnemies.push(enemy4);
allEnemies.push(enemy5);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});



























