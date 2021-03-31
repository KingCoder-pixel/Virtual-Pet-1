//Create variables here
var dog, happyDog, database, foodS, foodStock;
function preload()
{
  dogImg1 = loadImage("images/dogImg.png")
  dogImg2 = loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250, 270);
  dog.addImage(dogImg2);
  dog.scale = 0.15;

  foodStock = database.ref("Food");
  foodStock.on("value", readStock);
  
  
}


function draw() {  
  background(46, 139, 87)
  if(keyWentDown(UP_ARROW))
  {
    writeStock(foodS);
    dog.addImage(dogImg1)
  }
  drawSprites();

  fill("black")
  stroke("black")
  text("Food Remaining:" + foodS, 170, 200);
  textSize(20)
  text("Hint: Press Up arrow key to Feed the Dog Milk!", 50, 30) 

 

}

function readStock(data)
{
  foodS = data.val();
}

function writeStock(x)
{
  if(x<=0)
  {
    x = 0
  }else{
    x = x-1;
  }
  database.ref("/").update({
    Food:x
  })
  
 
}




