class boss extends Phaser.Scene {

  constructor ()
  {
      super({ key: "boss" });
  }

  preload() {
    this.load.image('bo', 'assets/boss.png')

    //mp3
    this.load.audio('ko', 'assets/jin.wav');

}

create () {
    this.story = this.add.image(0, 0, 'bo').setOrigin(0, 0).setScale(1);
   
    console.log("menu page - welcome");
  //   let map = this.make.tilemap({ key: "world" });

  // music
  this.time_Snd = this.sound.add('ko');
  this.time_Snd.play();
  window.count1 = this.time_Snd;
  // window.count1.loop = true;

  // this.timedEvent = this.time.addEvent({ delay: 10000, callback: this.delay10Seconds, callbackScope: this, loop: false });

    var spaceDown = this.input.keyboard.addKey('SPACE');
    
    spaceDown.on('down', function(){
    console.log("Spacebar pressed, go to next menu");
    this.scene.start("level3");
    }, this );

}
  
}
