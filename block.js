class Block {
    constructor(x, y, color) {
        var options = {
            isStatic: false,
            restitution: 0.2,
            stiffness: 4,
            friction:2
        }
        this.body = Bodies.rectangle(x, y, 40, 60, options);
        this.width = 40;
        this.height = 60;
        this.color = color;
        this.Visibility = 255;
        
        World.add(world, this.body);
    }
    display() {
        
        if(this.body.speed < 5){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            fill(this.color);
            strokeWeight(2);
            stroke("black");
            rect(0, 0, this.width, this.height);
            pop();
        }
        else {
            World.remove(world, this.body);
            push();
            this.Visibility = this.Visibility - 5;
            tint(255, this.Visibility);
            pop();
        }
    }

    score(){
        if (this.Visibility < 255 && this.Visibility > 200){
          score++;
        }
      }
      
}