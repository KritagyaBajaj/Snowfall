class Snow{
    constructor(x,y,r)
    {
        this.image = loadImage("snow4.webp");
        var options={
            restituition:1,
            friction:0,
            density:0.8
        }

        this.r=r;
        this.body = Bodies.circle(x,y,r,options);
        World.add(world, this.body);
    }
    display(){
       var pos =this.body.position;
       var angle = this.body.angle;
       push();
       translate(pos.x, pos.y);
       rotate(angle);
       fill("white");
       ellipseMode(CENTER);
       ellipse(0, 0, this.r,this.r);
       image(this.image,pos.x,pos.y,r);
       pop();
     }
    }