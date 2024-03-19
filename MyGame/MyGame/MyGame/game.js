var config = {
    type: Phaser.AUTO,
    ////// pixel size * tile map size 
    width: 400,
    height: 400,
    /////////////////////////////////////////
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: '#515A5A',
    pixelArt: true,
    //// Add all scenes below in the array
    scene: [main, story, plays, c, level1, level2, level3]
};

var game = new Phaser.Game(config);