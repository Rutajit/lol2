var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b","7810bb60-ec55-4956-809c-9db0b8bbea49","6dcf86a8-b6e6-4a81-88fc-df71c22744e2","65024c70-aeec-47ff-862c-af3ea64a3aa9","b6c163e3-235f-4658-97b1-e754e0db54b1","26c64f4b-6861-4a62-971b-c220603df230","0d52b716-b2a4-41b2-827f-7cccacb3b1ea"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":10,"looping":true,"frameDelay":12,"version":"zlJoVNFRSZqSHtidNbuvYEouKYKsJ7B0","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"Banana","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"IPg8R4FlAwQXT1fdQVTrOXjRzbDJXSLh","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"Stone","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"ve8d0XmJfH3f4SRSGtOd8VNha0mLreuf","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png"},"7810bb60-ec55-4956-809c-9db0b8bbea49":{"name":"jungle.jpg_1","sourceUrl":null,"frameSize":{"x":892,"y":262},"frameCount":2,"looping":true,"frameDelay":12,"version":"HK8YKDSbACrypPORAGmbzgkeshTyfu7e","loadedFromSource":true,"saved":true,"sourceSize":{"x":892,"y":524},"rootRelativePath":"assets/7810bb60-ec55-4956-809c-9db0b8bbea49.png"},"6dcf86a8-b6e6-4a81-88fc-df71c22744e2":{"name":"hu.png_1","sourceUrl":null,"frameSize":{"x":1003,"y":771},"frameCount":1,"looping":true,"frameDelay":12,"version":"4bGapMFawCA4mwvbg_TUYSeW5GQGfyv6","loadedFromSource":true,"saved":true,"sourceSize":{"x":1003,"y":771},"rootRelativePath":"assets/6dcf86a8-b6e6-4a81-88fc-df71c22744e2.png"},"65024c70-aeec-47ff-862c-af3ea64a3aa9":{"name":"h.png_1","sourceUrl":null,"frameSize":{"x":1003,"y":771},"frameCount":1,"looping":true,"frameDelay":12,"version":"OIXqQysr5.r8ir..j1tIhIqw33WFs.t8","loadedFromSource":true,"saved":true,"sourceSize":{"x":1003,"y":771},"rootRelativePath":"assets/65024c70-aeec-47ff-862c-af3ea64a3aa9.png"},"b6c163e3-235f-4658-97b1-e754e0db54b1":{"name":"h.png_2","sourceUrl":null,"frameSize":{"x":1003,"y":771},"frameCount":1,"looping":true,"frameDelay":12,"version":"QF2OOObns3ZT_DbolRYNDyHGjlJ_uicB","loadedFromSource":true,"saved":true,"sourceSize":{"x":1003,"y":771},"rootRelativePath":"assets/b6c163e3-235f-4658-97b1-e754e0db54b1.png"},"26c64f4b-6861-4a62-971b-c220603df230":{"name":"jungle-min-min.jpg_1","sourceUrl":null,"frameSize":{"x":1003,"y":771},"frameCount":1,"looping":true,"frameDelay":12,"version":"4JZSrIbGseGZ4biCxr6wItZrXOTopy.H","loadedFromSource":true,"saved":true,"sourceSize":{"x":1003,"y":771},"rootRelativePath":"assets/26c64f4b-6861-4a62-971b-c220603df230.png"},"0d52b716-b2a4-41b2-827f-7cccacb3b1ea":{"name":"jungle-min-min.jpg_2","sourceUrl":null,"frameSize":{"x":1003,"y":771},"frameCount":1,"looping":true,"frameDelay":12,"version":"S1v4YdndNTeg4dZXdS0yn.swy28ubRBs","loadedFromSource":true,"saved":true,"sourceSize":{"x":1003,"y":771},"rootRelativePath":"assets/0d52b716-b2a4-41b2-827f-7cccacb3b1ea.png"}}};
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

var count = 0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var backround = createSprite(400,370,30,30);
backround.depth = 0.8;

 backround.setAnimation(  "jungle-min-min.jpg_1");
 backround.scale =1.5;
var player = createSprite(100,340,20,50);
player.setAnimation( "monkey");
player.scale= 0.1;
player.depth = 0.9;

var ground = createSprite(400,370,800,10);
backround.velocityX = -4;
backround.x=backround.width/2;
ground.visible = false;

var bg =createGroup();
var og =createGroup();

function draw() {
   background(255);
 
  
  if(backround.x<0){
   backround.x=ground.width/2; 
  }
   
  banana();
  hu();
  player.collide(ground);
  
  
  if(keyDown("space")){
    player.velocityY=-10;
 
  
   
  }
 
   player.velocityY=player.velocityY+0.5;
  if( count===10){
 player.scale= player.scale+0.2 }
  
  
  if(player.isTouching(bg)){
    count = count+2;
    bg.destroyEach();
  }
  
   player.velocityY=player.velocityY+0.5;
   if(og.isTouching(player)){
     player.scale=0.2;
   }
  
     drawSprites(); 
    if(og.isTouching(player)){
    gameState  = END;
    og.destroyEach();
    bg.destroyEach();
    bg.setVelocityXEach(0);
    og.setVelocityXEach(0);
  
    
    
    backround.velocityX = 0;
    player.destroy();
    }
    
  
  
  
  if(count===10){
    player.scale=0.2;
    
  }
  if(count===20){
    player.scale=0.3;
    
    
  }
  if(count===30){
    player.scale=0.4;
    
  }
  if(count===40){
    player.scale=0.5;
    
  }
     drawSprites(); 
    
    stroke("white");
  textSize(25);
  fill("black");

  text("score:"+count,100,50);
  
      
    
  
}


function banana(){
  
  if(World.frameCount%80===0){
    var bananabeyblade = createSprite(200,260,20,20); 
  bananabeyblade.setAnimation( "Banana"); 
  bananabeyblade.scale=0.05;
  bananabeyblade.lifetime= 150;
  bananabeyblade.y = randomNumber(120,200);
  bananabeyblade.velocityX = -5;
  bg.add(bananabeyblade);
  }
  
} 
  function hu(){
     if(World.frameCount%300===0){
    var stone = createSprite(200,340,20,20); 
  stone.setAnimation( "Stone"); 
  stone.scale=0.15;
  stone.depth=0.9;
  stone.lifetime= 150;
  
  stone.velocityX = -5;
  og.add(stone);
  
  }
    
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
