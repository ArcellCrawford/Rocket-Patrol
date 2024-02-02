//Spaceship
class Spaceship extends Phaser.GameObjects.Sprite{
    constructor (scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame)
        //add object to existing scene 
        scene.add.existing(this)// add to existing scene
        this.points = pointValue // store point value
        this.moveSpeed = game.settings.spaceshipSpeed //spaceship speed in piexels/frame
    }
    update(){
        //move spaceship left 
        this.x -= this.moveSpeed

        //wrap from left to right edge 
        if(this.x <= 0 - this.width ){
            this.x = game.config.width
        }
    }
    //reset position 
    reset(){
        this.x = game.config.width 
    }
}