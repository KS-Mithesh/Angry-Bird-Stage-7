class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
   if(this.body.velocity.x>5 && this.body.position.x>200){
   var p = this.body.position;
    var pos = [p.x,p.y];

    this.trajectory.push(pos);

    for(var i=0;i<this.trajectory.length;i++){
      image(this.smoke,this.trajectory[i][0],this.trajectory[i][1]);
    }
  } 
  super.display();
  }
}
