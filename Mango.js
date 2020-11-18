class Mango{
    constructor(x, y, width, height){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.mango);
    }
    display(){
        var angle = this.position;
        translate(this.body.position.x, this.body.position.y);
        
    }
}

