class win1 extends Phaser.Scene {

  constructor ()
  {
      super({ key: "win1" });
  }

  preload() {
    this.load.image('suka', 'assets/yoyi.png')

    //mp3
    this.load.audio('zb', 'assets/linyu.mp3');

}

create () {
    this.story = this.add.image(0, 0, 'suka').setOrigin(0, 0).setScale(1);
   
    console.log("menu page - welcome");
  //   let map = this.make.tilemap({ key: "world" });

  // music
  this.time_Snd = this.sound.add('zb');
  this.time_Snd.play();
  window.count1 = this.time_Snd;
  // window.count1.loop = true;

  // this.timedEvent = this.time.addEvent({ delay: 10000, callback: this.delay10Seconds, callbackScope: this, loop: false });

    var spaceDown = this.input.keyboard.addKey('SPACE');
    
    spaceDown.on('down', function(){
    console.log("Spacebar pressed, go to next menu");
    this.scene.start("win2");
    }, this );

}
  
}
