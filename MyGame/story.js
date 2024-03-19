class story extends Phaser.Scene {
    constructor() {
      super({
        key: "story",
      });
  
      // Put global variable here
    }
  
    preload() {
  
      this.load.image("story","assets/st.jpg");
  
    }

    create() {
      console.log("*** story scene");
  
      // Add image and detect spacebar keypress
      this.add.image(0, 0, 'story').setOrigin(0, 0);
  
      // Check for spacebar or any key here
      var spaceDown = this.input.keyboard.addKey("ENTER");
  
      // On spacebar event, call the world scene
      spaceDown.on(
        "down",
        function () {
          console.log("Jump to intropage scene");
          this.scene.start( "intropage");
        },
        this
      );
      this.sealsound = this.sound.add("seal");
        this.sealsound.play();
  
      }}
  