class main extends Phaser.Scene {

    constructor ()
    {
        super({ key: "main" });
    }
  
    preload() {
      this.load.image('main', 'assets/fp.png')
  
  }
  
  create () {
      this.main = this.add.image(0, 0, 'main').setOrigin(0, 0).setScale(1);

      this.add.text(85,310, '-press SpaceBar to continue-', 
            { font: '15px Courier', fill: '#FFFFFF' });
     
      console.log("menu page - welcome");
    //   let map = this.make.tilemap({ key: "world" });
  
      var spaceDown = this.input.keyboard.addKey('SPACE');
      
      spaceDown.on('down', function(){
      console.log("Spacebar pressed, go to next menu");
      this.scene.start("story");
      }, this );
  
  }
    
  }
  
  