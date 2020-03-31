// Target class - contains all data and functionality regarding game target
class t_target {
    constructor() {
        this.pos = createVector(0, height/4);
    }

    respawn(){
        this.pos.x = 0;
        this.pos.y = Math.floor(Math.random() * (height - 60)) + 30;
    }

    move(vel){
        this.pos.add(vel);
        
        if (this.pos.y > height - 50 || this.pos.y < 0) {
            this.pos.y = this.pos.y - vel.y;
        }
    }

    display() {
        image(targetimg, this.pos.x, this.pos.y, 50, 25);
    }
}