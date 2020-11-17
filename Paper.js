class Paper{

  constructor(x,y){
    var ball_options = {
      restitution:0.3,
      isStatic:false,
      friction:0.5,
      density:1.2
    }

    this.body = Bodies.circle(x,y,15, ball_options);
    this.radius = 30

    World.add(world, this.body)
  }
  display(){
    var pos = this.body.position
    push()
    strokeWeight(2)
    stroke(0)
    fill(255)
    circle(pos.x,pos.y,this.radius)
    pop();
  }
};