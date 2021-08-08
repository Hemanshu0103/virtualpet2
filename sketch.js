var database ,dog,dog1,dog2,foodS
var position
//var form
var feed,add
var foodobject
var Feedtime
var Lastfeed
//Create variables here

function preload()

{
  dogimg1 = loadImage("images/dogImg.png")
  dogimg2 = loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
	createCanvas(1000, 500);
  database = firebase.database();
  console.log(database);
 
  foodobject=new Food()
  dog = createSprite(550,250,10,10);
  dog.addImage(dogimg1)
  dog.scale=0.2
 
  var dogo = database.ref('Food');
  dogo.on("value", readPosition, showError);
  feed = createButton("FEED DRAGO")
  feed.position(500,15)
  feed.mousePressed(FeedDog)
  add = createButton("ADD FOOD")
  add.position(400,15)
  add.mousePressed(AddFood)

  for (var i = 5; i < 1000; i=i+10) 
  {
  
  var dot = createSprite(i, 5, 3, 3);
  dot.shapeColor = "blue";
  
  }
  for (var i = 5; i < 1000; i=i+10) 
  {
  
  var dot1 = createSprite(i, 495, 3, 3);
  dot1.shapeColor = "blue";
  
  }
  for (var i = 5; i < 1000; i=i+10) 
  {
  
  var dot1 = createSprite(995,i, 3, 3);
  dot1.shapeColor = "blue";
  
  }
  for (var i = 5; i < 1000; i=i+10) 
  {
  
  var dot1 = createSprite(5,i, 3, 3);
  dot1.shapeColor = "blue";
  
  }
} 

function draw(){
 background("pink");

 foodobject.display()
 
 drawSprites();
  
 fill(255,255,254);
 textSize(15);

drawSprites();
textSize(17);
  fill("black");
  text("❤This is your Puppy Tommy🐶 and he is so Hungry❤",320,120);
  fill("black");
  text("💖Add food for Tommy 'ADD FOOD' then click on 'FEED DRAGO' to feed your pet Dog Tommy💖",200,100);
  fill("black");
  text("Milk Bottles Remaining  "+foodS,400,440);
  fill("black");
  text("💛Hellow Once Again,Gorgeous mam💛",400,80);
}
function readPosition(data){
  position = data.val();
  foodobject.updateFoodStock(position)
}

function showError(){
  console.log("Error in writing to the database");
}

function writePosition(nazo){
  if(nazo>0){
    nazo=nazo-1
  }
  else{
    nazo=0
  }
  database.ref('/').set({
    'Food': nazo
  })

}
function AddFood(){
position++
database.ref('/').update({
  Food:position
}

)
}
function FeedDog(){

dog.addImage(dogimg2)
foodobject.updateFoodStock(foodobject.getFoodStock()-1)
 database.ref('/').update({
   Food:foodobject.getFoodStock(),
   FeedTime:hour ()
 })
}
