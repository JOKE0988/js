class warning extends Phaser.Scene {

  constructor ()
  {
      super({ key: "warning" });
  }

  preload() {
    this.load.image('warning', 'assets/wo.png')

}

create () {
    this.story = this.add.image(0, 0, 'warning').setOrigin(0, 0).setScale(1);
   
    console.log("menu page - welcome");
  //   let map = this.make.tilemap({ key: "world" });

    var spaceDown = this.input.keyboard.addKey('SPACE');
    
    spaceDown.on('down', function(){
    console.log("Spacebar pressed, go to next menu");
    this.scene.start("level2");
    }, this );

}
  
}
