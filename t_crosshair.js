// Crosshair class - contains all functionality regarding joystick controlled crosshairs
class t_crosshair {
    constructor(){
        this.x = 0;
        this.y = height/2;
    }
    
    display(){
        this.y = this.y + controllers[0].axes[2] * 5;
        if (this.y > height - 50 || this.y < 0) {
            this.y = this.y - controllers[0].axes[2] * 5;
        }
        image(crosshairimg, this.x, this.y, 50, 50);
    }
}