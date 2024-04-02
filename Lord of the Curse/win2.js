class win2 extends Phaser.Scene {

  constructor ()
  {
      super({ key: "win2" });
  }

  preload() {
    this.load.image('vito', 'assets/win.png')


}

create () {
    this.story = this.add.image(0, 0, 'vito').setOrigin(0, 0).setScale(1);
   
    console.log("menu page - welcome");
  //   let map = this.make.tilemap({ key: "world" });


    var spaceDown = this.input.keyboard.addKey('SPACE');
    
    spaceDown.on('down', function(){
    console.log("Spacebar pressed, go to next menu");
    this.scene.start("win3");
    }, this );

}
  
}
