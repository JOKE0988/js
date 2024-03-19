class c extends Phaser.Scene {

  constructor ()
  {
      super({ key: "c" });
  }

  preload() {
    this.load.image('c', 'assets/c.png')

}

create () {
    this.c = this.add.image(0, 0, 'c').setOrigin(0, 0).setScale(1);
   
    console.log("menu page - welcome");
  //   let map = this.make.tilemap({ key: "world" });

    var spaceDown = this.input.keyboard.addKey('SPACE');
    
    spaceDown.on('down', function(){
    console.log("Spacebar pressed, go to next menu");
    this.scene.start("level1");
    }, this );

}
  
}


