class preloadScene extends Phaser.Scene {
    constructor() {
        super({ key: 'preloadScene' });
    }

    preload () {

        // this.load.audio('bgm','assets/bgm.mp3');
        // this.load.audio("pop","assets/pop.mp3");
        this.load.image('frontpage','assets/fp.png');

    }

    create() {
        console.log("preloadScene");
        // this.music = this.sound
        // .add("bgm",{
        //     loop : true,
        // })
        // .setVolume(0.2);

        // this.music.play();

        this.add.image(0, 0, 'frontpage').setOrigin(0, 0).setScale(1.6);
        this.add.text(170,465, '-press SpaceBar to continue-', 
            { font: '20px Courier', fill: '#FFFFFF' });

        var spaceDown = this.input.keyboard.addKey('SPACE');

        spaceDown.on('down', function() {
            this.scene.start("level1");
        }, this);

        var level1Down = this.input.keyboard.addKey(49);

        level1Down.on("down", function() {
            console.log("1 pressed, jump to map1");
            this.scene.start("level1");
        }, this);

        var level2Down = this.input.keyboard.addKey(50);

        level2Down.on("down", function() {
            console.log("2 pressed, jump to map2");
            this.scene.start("level2");
        }, this);

        var level3Down = this.input.keyboard.addKey(51);

        level3Down.on("down", function() {
            console.log("3 pressed, jump to map3");
            this.scene.start("level3");
        }, this);
    }
}