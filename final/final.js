var game;
var starfield;
var ship;
var laser;
var lasers = [];
var timer;
var asteroid;

function Ship(){
    tShip = new Sprite(game, "http://pixelartmaker.com/art/d9c710d4c7e1ae6.png", 55, 60);
    tShip.checkKeys = function(){
        if(keysDown[K_LEFT]){
            this.changeImgAngleBy(-5);
        }
        if(keysDown[K_RIGHT]){
            this.changeImgAngleBy(5);
        }
        if(keysDown[K_UP]){
            this.addVector(this.getImgAngle(), 0.5);
        }
        if(keysDown[K_DOWN]){
            this.addVector(this.getImgAngle(), -0.5);
        }
        if(keysDown[K_SPACE]){
            if(timer.getElapsedTime() >=0.25){
                laser = new Laser();
                laser.fire();
                timer.reset();
            }
        }
    };
    return tShip;
}

function Laser(){
    tLaser = new Sprite(game, "http://pixelartmaker.com/art/58c8bdf5cb4e5bb.png", 30, 30);
    tLaser.hide();
    tLaser.fire = function(){
        lasers.push(this);
        this.show();
        tLaser.setSpeed(25);
        this.setPosition(ship.x, ship.y);
        this.setAngle(ship.getImgAngle());
        this.setBoundAction(DIE);
    };
    return tLaser;
}

function Asteroid(){
    tAsteroid = new Sprite(game, "http://pixelartmaker.com/art/b0d28fcc8a7f281.png", 120, 120);
    tAsteroid.setMoveAngle(50);
    tAsteroid.setSpeed(10);
    tAsteroid.setBoundAction(BOUNCE);
    return tAsteroid;
}

function init(){
    game = new Scene();
    starfield = new Sprite(game, "https://images6.alphacoders.com/885/885542.png", 1200, 800);
    starfield.setSpeed(0);
    timer = new Timer();
    ship = new Ship();
    ship.setSpeed(0);
    asteroid = new Asteroid();
    game.start();
}

function update(){
    game.clear();
    starfield.update();
    ship.checkKeys();
    ship.update();
    lasers.forEach(function(element){
        element.update();
    });
    asteroid.update();
}