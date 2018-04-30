var scene;
var ball;

function init(){
    scene = new Scene();
    scene.setSize(700, 500);
    ball = new Sprite (scene, "https://orig00.deviantart.net/721c/f/2014/117/4/e/pixel_ball_test_by_rongs1234-d7g8n34.png", 20, 20);
    ball.setMoveAngle(30);
    ball.setSpeed(10);
    ball.setBoundAction(BOUNCE);
    scene.start();
}

function update(){
    scene.clear();
    ball.update();
}
