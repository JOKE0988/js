class main extends Phaser.Scene {

    constructor ()
    {
        super({ key: "main" });
    }
  
    preload() {
      this.load.image('main', 'assets/fp.png')

      //mp3
      this.load.audio('blue', 'assets/bu.mp3');
  
  }
  
  create () {
      this.main = this.add.image(0, 0, 'main').setOrigin(0, 0).setScale(1);

      this.add.text(85,310, '-press SpaceBar to continue-', 
            { font: '15px Courier', fill: '#FFFFFF' });
     
      console.log("menu page - welcome");

      // // music
      this.time_Snd = this.sound.add('blue');
      this.time_Snd.play();
      window.count1 = this.time_Snd;
      // window.count1.loop = true;

      // this.timedEvent = this.time.addEvent({ delay: 10000, callback: this.delay10Seconds, callbackScope: this, loop: false });
 


      // let map = this.make.tilemap({ key: "world" });


      let spaceDown = this.input.keyboard.addKey('SPACE');
      
      spaceDown.on('down', function(){
      console.log("Spacebar pressed, go to next menu");
      this.scene.start("story");
      }, this );
  
  }// end of creatre/////////////////////////////////////////////////////////////////////////
    
}
  
  