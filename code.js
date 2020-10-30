var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["81a4f500-ad11-4009-8f0e-175b165af74b","11d5d9f0-6932-45de-ba25-6f4ac37fe9a9","7d58941f-a7d8-42da-85c6-3efa6131461a","42b7aa29-c5f8-44fe-9d49-8540deca9c13","e92d7a76-cb9d-426f-90f2-1f5356f539aa","efd3d37e-602d-4ef6-a92f-44fec91fa462","0ad793ce-16c4-4650-bcc4-2ceb86fce097","32c9fdf6-b487-427c-97a7-9ea8a3129b73"],"propsByKey":{"81a4f500-ad11-4009-8f0e-175b165af74b":{"name":"ball","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/81a4f500-ad11-4009-8f0e-175b165af74b.png","frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":4,"version":"dtbPe0gMjI4Z6QLWT9khBvOj7Umnd9wU","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/81a4f500-ad11-4009-8f0e-175b165af74b.png"},"11d5d9f0-6932-45de-ba25-6f4ac37fe9a9":{"name":"COMPUTER","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/11d5d9f0-6932-45de-ba25-6f4ac37fe9a9.png","frameSize":{"x":77,"y":69},"frameCount":1,"looping":true,"frameDelay":4,"version":"BLFvUEf3QhtNBefER455XH.hMEQAbMBz","loadedFromSource":true,"saved":true,"sourceSize":{"x":77,"y":69},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/11d5d9f0-6932-45de-ba25-6f4ac37fe9a9.png"},"7d58941f-a7d8-42da-85c6-3efa6131461a":{"name":"YOU","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/7d58941f-a7d8-42da-85c6-3efa6131461a.png","frameSize":{"x":60,"y":91},"frameCount":1,"looping":true,"frameDelay":4,"version":"bq1tQ6ldfwNyLZFZeJkar19It.isW3dc","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":91},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/7d58941f-a7d8-42da-85c6-3efa6131461a.png"},"42b7aa29-c5f8-44fe-9d49-8540deca9c13":{"name":"player_kick","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/42b7aa29-c5f8-44fe-9d49-8540deca9c13.png","frameSize":{"x":77,"y":77},"frameCount":1,"looping":true,"frameDelay":4,"version":"F.Sx4VNZtVUTCwhlqCjTrbGijOua52yp","loadedFromSource":true,"saved":true,"sourceSize":{"x":77,"y":77},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/42b7aa29-c5f8-44fe-9d49-8540deca9c13.png"},"e92d7a76-cb9d-426f-90f2-1f5356f539aa":{"name":"YOU LOST","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/e92d7a76-cb9d-426f-90f2-1f5356f539aa.png","frameSize":{"x":92,"y":51},"frameCount":1,"looping":true,"frameDelay":4,"version":"T_95SQj8veeoJPdTxQTYHVnL4s9eWqye","loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":51},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/e92d7a76-cb9d-426f-90f2-1f5356f539aa.png"},"efd3d37e-602d-4ef6-a92f-44fec91fa462":{"name":"girlPlayer.png_1","sourceUrl":null,"frameSize":{"x":50,"y":85},"frameCount":1,"looping":true,"frameDelay":12,"version":"1UJPc26Mtfqc6UGbAuuHFBTo6e22fIB8","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":85},"rootRelativePath":"assets/efd3d37e-602d-4ef6-a92f-44fec91fa462.png"},"0ad793ce-16c4-4650-bcc4-2ceb86fce097":{"name":"girlPlayer_kick.png_1","sourceUrl":null,"frameSize":{"x":50,"y":76},"frameCount":1,"looping":true,"frameDelay":12,"version":"MbRw3n8.sPKoSf5DI9QMl7tvCm.nhw0C","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":76},"rootRelativePath":"assets/0ad793ce-16c4-4650-bcc4-2ceb86fce097.png"},"32c9fdf6-b487-427c-97a7-9ea8a3129b73":{"name":"soccer field","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"iermUMtyYhsf0DCorKmxTf89KdyQAeK1","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/32c9fdf6-b487-427c-97a7-9ea8a3129b73.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//create the ball, playerPaddle and computerPaddle as sprite objects
var scenery = createSprite(200,200);
scenery.setAnimation("soccer field");

var ball = createSprite(200,200,10,10);
ball.setAnimation("ball");

var playerPaddle = createSprite(360,200,10,70);
playerPaddle.setAnimation("YOU");

var computerPaddle = createSprite(40,200,10,70);
computerPaddle.setAnimation("COMPUTER");



//variable to store different state of game
var gameState = "serve";

//variables to keep the score
var compScore = 0;
var playerScore = 0;




function draw() {
  //clear the screen
  background("white");
drawSprites();  
  if(ball.isTouching(computerPaddle) || ball.isTouching(playerPaddle)) {
   playSound("assets/hit.mp3");
  }
  
  //place info text in the center
  if (gameState === "serve") {
  fill("blue");  
    text("Press Space to Serve",150,180);
  }
   
  //display scores
  
  fill("blue");
  text(compScore, 170,20);
  text(playerScore, 230,20);
  
  //make the player paddle move with the mouse's y position
playerPaddle.y=World.mouseY;
    
  
  //AI for the computer paddle
  //make it move with the ball's y position
 //computerPaddle.y=ball.y;
  
  //draw line at the centre
  for (var i = 0; i < 400; i=i+20) {
    line(200,i,200,i+10);
  }
  
  
  //create edge boundaries
  //make the ball bounce with the top and the bottom edges
  createEdgeSprites();

if (ball.isTouching(topEdge)||(ball.isTouching(bottomEdge))) {
 
playSound("assets/wall_hit.mp3", false);
  
    
  }
    

  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(playerPaddle);
  ball.bounceOff(computerPaddle);
  computerPaddle.bounceOff(topEdge);
  computerPaddle.bounceOff(bottomEdge);
  
  //serve the ball when space is pressed
  if (keyDown("space") &&  gameState === "serve") {
    serve();
    
    playerPaddle.setAnimation("YOU");
    gameState = "play";
    
  }
  
 
  //reset the ball to the centre if it crosses the screen
  if(ball.x > 400 || ball.x <0) {
    
    if(ball.x > 400) {
      
playerPaddle.setAnimation("YOU LOST");
compScore = compScore + 1;
      
      
    }
    
    if(ball.x < 0) {
      playerScore = playerScore + 1;
    }
   
 playSound("assets/score.mp3", false);
     
    
    reset();
    gameState = "serve";
  }
  
  if (playerScore === 5 || compScore === 5){
  
    gameState = "over";
    fill("blue");
    text("Game Over!",170,160);
    text("Press 'R' to Restart",150,180);
  }
  
  if (keyDown("r") && gameState === "over") {
    gameState = "serve";
    compScore = 0;
    playerScore = 0;
  }
  
  
}

function serve() {
  ball.velocityX = 5;
  ball.velocityY = 5;
  computerPaddle.velocityY=-5;
}

function reset() {
  ball.x = 200;
  ball.y = 200;
  ball.velocityX = 0;
  ball.velocityY = 0;
    computerPaddle.velocityY=0;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
