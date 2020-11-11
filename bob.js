class Bob {
    constructor(x, y, r) {
      var options = {
          //isStatic : true,
          restitution : 1.2,
          stiffness: 2,
          friction : 0.5,
          density : 2
      }
      this.body = Bodies.circle(x,y,40, options);
      //this.width = 10;
      //this.height = 10;
      this.r = 75;
      //this.diameter = 80;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke("purple")
      fill("violet");
      ellipse(0,0, this.r, this.r);
      pop();
    }
  };