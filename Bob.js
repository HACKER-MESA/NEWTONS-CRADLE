class Bob{
    constructor(x,y,r){
        var options={
            isStatic: true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        this.x = x;
        this.y = y;
        this.r = r;
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill(67, 232, 0);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}