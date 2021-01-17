class Pig{
    constructor(x, y){
        var options={
            restitution:0.5,
            density:1,
            friction:1
        }
        this.w=50;
        this.h=50;
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        World.add(world, this.body);
    }
    display(){
        push();
        fill("green");
        var pos=this.body.position;
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();
    }
}
