class Drops{
    constructor(x, y) {

        var options ={
            restitution:0.1
        }
      
        this.rain = Bodies.circle(x, y,options);       
        World.add(world, this.body);

    }
    display() {

       
        push();
       var maxDrops=100
       for(var i=0; i<maxDrops;i++){
           drops.push(new createDrop(random(0,400),random(0,400)));
       }
        ellipse(0, 0, this.r,this.r);
        pop();
    }

    update(){
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
        }
    }
}