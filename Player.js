class Player{

    constructor(){
        this.spt=createSprite(100,100,100,100);
        this.spt.shapeColor="blue";
    }

    applyGravity(){
        this.spt.velocityY=this.spt.velocityY+2;
    }

    jump(){
        this.spt.velocityY= -21;
    }

moveRight(){
 this.spt.x=this.spt.x+30;

}

moveLeft(){
   this.spt.x=this.spt.x-30;

}
}
