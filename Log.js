class Log{
    constructor(x, y, h, a){
        var options={
            restitution:0.8,
            density:0.5,
            friction:1.5
        }
        this.w=20;
        this.h=h;
        this.body = Bodies.rectangle(x, y, 20, h, options);
        Matter.Body.setAngle(this.body,a);
        World.add(world, this.body);
    }
    display(){
        push();
        stroke(0);
        strokeWeight(5);
        fill("orange");
        var pos=this.body.position;
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();
    }
}
