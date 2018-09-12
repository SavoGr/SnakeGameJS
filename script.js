var s;
var korak  = 10;
var food;
var fps = 10;
function setup(){
    createCanvas(600,600);
    s = new snake();
    frameRate(fps);
    pickLocation();
    
}
function draw(){
    background(51);
    s.death();
    s.update();
    s.show();
    if(s.eat(food)){
        pickLocation();
        fps+=2;
        frameRate(fps);
    }
    fill(9,237,130);
    rect(food.x,food.y,korak,korak);
}

function keyPressed(){
    if(keyCode==UP_ARROW){
        s.dir(0,-1);
    }
    else if(keyCode==DOWN_ARROW){
        s.dir(0,1);
    }
    else if(keyCode==LEFT_ARROW){
        s.dir(-1,0);
    }
    else if(keyCode==RIGHT_ARROW){
        s.dir(1,0);
    }

}
function pickLocation(){
    var col = floor(width/korak);
    var row = floor(height/korak);
    food = createVector(floor(random(col)),floor(random(row)));
    food.mult(korak);
}
