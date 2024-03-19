class plays extends Phaser.Scene {

  constructor ()
  {
      super({ key: "plays" });
  }

  preload() {
    this.load.image('plays', 'assets/plays.png')

}

create () {
    this.plays = this.add.image(0, 0, 'plays').setOrigin(0, 0).setScale(1);
   
    console.log("menu page - welcome");
  //   let map = this.make.tilemap({ key: "world" });

    var spaceDown = this.input.keyboard.addKey('SPACE');
    
    spaceDown.on('down', function(){
    console.log("Spacebar pressed, go to next menu");
    this.scene.start("c");
    }, this );

}
  
}


