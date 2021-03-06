// Target class - contains all data and functionality regarding game target
class j_target {
    constructor() {
        this.pos = createVector(width/2, height/4);
    }

    respawn(){
        this.pos.x = Math.floor(Math.random() * (width - 60)) + 80;
        this.pos.y = Math.floor(Math.random() * (height - 60)) + 80;
    }

    move(vel){
        this.pos.add(vel);
        if (this.pos.x > width - 50 || this.pos.x < 50) {
            this.pos.x = this.pos.x - vel.x;
        }
        if (this.pos.y > height - 25 || this.pos.y < 0) {
            this.pos.y = this.pos.y - vel.y;
        }
    }

    display() {
        image(targetimg, this.pos.x, this.pos.y, 50, 25);
    }
}