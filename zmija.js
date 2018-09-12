//
function snake() {
    this.boja = [0,0,0];
    this.x = 0;
    this.y = 0;
    this.xspeed = 0;
    this.yspeed = 0;
    this.length = 1;
    this.tail = [];

    this.update = function(){
        if(this.length ===this.tail.length){
            for (var i = 0; i < this.length; i++) {
                this.tail[i] = this.tail[i+1];
                
            }
            
        }
        this.tail[this.length-1] = createVector(this.x,this.y);
        
        this.x += this.xspeed;
        this.y += this.yspeed;
    }
    this.dir= function(xplus,yplus) {

        this.xspeed = xplus*korak;
        this.yspeed = yplus*korak;
    }
    this.death = function () {
        for (var i = 0; i < this.tail.length; i++) {
            var pos = this.tail[i];
            var d = dist(this.x,this.y,pos.x,pos.y);
            if(d<korak){
                this.length = 1;
                this.tail = [];
                this.boja = [0,0,0];
                fps  = 10;
            }
            
        }
    }

    

    this.show = function () {
        for (let i = 0; i < this.tail.length; i++) {
            fill(this.boja)
            rect(this.tail[i].x,this.tail[i].y,10,10);
            
        }
    }
    

    this.eat = function(food){
        var distance  = dist(this.x,this.y,food.x,food.y);
        if(distance<=korak/2){
            this.length++;
            this.boja = [random(255),random(255),random(255)];
            return true;
        }
        else{
            return false;
        }
    }
}