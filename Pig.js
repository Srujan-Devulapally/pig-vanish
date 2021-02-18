class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.vanish=255
  }
display(){
  push();
  if(this.body.speed<3){
    super.display();
  } else{
  World.remove(world, this.body);
this.vanish=(this.vanish-5)
tint(255,this.vanish)
image(this.image,this.body.position.x,this.body.position.y,50,50)
  }
  pop();
}
}