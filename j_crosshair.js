// Crosshair class - contains all functionality regarding joystick controlled crosshairs
class j_crosshair {
    constructor(){
        this.x = width/2;
        this.y = height/2;
    }
    
    display(){
        this.x = this.x + controllers[0].axes[0] * 5;
        if (this.x > width - 50 || this.x < 50) {
            this.x = this.x-controllers[0].axes[0] * 5;
        }
        this.y = this.y - controllers[0].axes[1] * 5;
        if (this.y > height - 50 || this.y < 0) {
            this.y = this.y+controllers[0].axes[1] * 5;
        }
        image(crosshairimg, this.x, this.y, 50, 50);
    }
}