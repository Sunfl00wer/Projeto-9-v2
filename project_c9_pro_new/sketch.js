
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);
  box.shapeColor = "white";
}

var btn_red;
var btn_green;
var btn_yellow;
var btn_blue;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);
  btn_red = createButton("RED");
  btn_red.position(100,50);
  btn_red.mousePressed(red_bg);
  
  
  btn_green = createButton("GREEN");
  btn_green.position(250,50);
  btn_green.mousePressed(green_bg);

  btn_yellow = createButton("YELLOW");
  btn_yellow.position(250,50);
  btn_yellow.mousePressed(yellow_bg);

  btn_blue = createButton("BLUE");
  btn_blue.position(250,50);
  btn_blue.mousePressed(blue_bg);
  
}

function draw() {
  background(r,g,b);
}


function red_bg()
{
  r = 255;
  g = 77;
  b =77;
}

function green_bg()
{
  r = 102;
  g = 255;
  b =102;
}

function yellow_bg()
{
  r = 255;
  g = 255;
  b =77;
}

function blue_bg()
{
  r = 77;
  g = 195;
  b =255;
}