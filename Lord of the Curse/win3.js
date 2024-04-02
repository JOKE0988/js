class win3 extends Phaser.Scene {

  constructor ()
  {
      super({ key: "win3" });
  }

  preload() {
    this.load.image('con', 'assets/conti.png')


}

create () {
    this.story = this.add.image(0, 0, 'con').setOrigin(0, 0).setScale(1);
   
    console.log("menu page - welcome");
  //   let map = this.make.tilemap({ key: "world" });


    var spaceDown = this.input.keyboard.addKey('SPACE');
    
    spaceDown.on('down', function(){
    console.log("Spacebar pressed, go to next menu");
    this.scene.start("win4");
    }, this );

}
  
}
