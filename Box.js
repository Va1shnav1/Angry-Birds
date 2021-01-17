class Box{
    constructor(x, y, w, h, r, g, b){
        var options={
            restitution:0.5,
            density:1,
            friction:1
        }
        this.r=r;
        this.b=b;
        this.g=g;
        this.w=w;
        this.h=h;
        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
    }
    display(){
        push();
        fill(color(this.r, this.g, this.b));
        var pos=this.body.position;
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();
    }
}
