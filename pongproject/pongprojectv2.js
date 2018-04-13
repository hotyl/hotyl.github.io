var scene;
var ball;
var paddle;
var CHANGE = 5;

function Paddle(){
    tPaddle = new Sprite(scene, "pongpaddle.png", 50, 20);
    tPaddle.setAngle(180);
    tPaddle.setSpeed(0);
    
    tPaddle.checkKeys = function(){
        if(keysDown[K_UP]){
            this.changeYby(CHANGE);
            if(this.y - this.width/2<0){
                this.setY(this.width/2);
            }
        }
        if(keysDown[K_DOWN]){
            this.changeYby(-CHANGE);
            if(this.y+this.width/2>scene.height){
                this.setY(scene.height-this.width/2);
            }
        }
    };
    
    return tPaddle;
}

function init(){
    scene = new Scene();
    scene.setSize(700, 500);
    ball = new Sprite (scene, "https://orig00.deviantart.net/721c/f/2014/117/4/e/pixel_ball_test_by_rongs1234-d7g8n34.png", 20, 20);
    ball.setMoveAngle(30);
    ball.setSpeed(10);
    ball.setBoundAction(BOUNCE);
    paddle = new Paddle();
    scene.start();
}

function update(){
    scene.clear();
    paddle.checkKeys();
    paddle.update();
    ball.update();
}