class level2 extends Phaser.Scene {

  constructor ()
  {
      super({key: 'level2' });
  }

  preload () {
//Step 1, load JSON
  this.load.tilemapTiledJSON("map2","assets/level2.tmj");

//Step 2, peload any images here
  this.load.image("atlasIMG","assets/misc_atlas.png")
  this.load.image("shadowIMG","assets/Maintilemap_Shadows.png")
  this.load.image("streetIMG","assets/Street32x32.png")
  this.load.image("tuxmonIMG","assets/tuxmon-32x32.png")
  this.load.image("villaIMG","assets/village32x32.png")
  this.load.image("demonIMG","assets/defimon2.png")

  this.load.spritesheet("gen2","assets/talo2.png", {
  frameWidth: 64,
  frameHeight: 64,
  });

} // end of preload //

  create (){

  // console.log("animationScene")

//Step 3, create the map from main
let map = this.make.tilemap ({key: "map2"});

//Step 4, load the game tiles
//1st parameter is name in Tiled,
//2nd parameter is key in Preload

let Tiles1 = map.addTilesetImage("defimon", "demonIMG");
let Tiles2 = map.addTilesetImage("Maintilemapshadows", "shadowIMG");
let Tiles3 = map.addTilesetImage("altas", "altasIMG");
let Tiles4 = map.addTilesetImage("Street", "streetIMG");
let Tiles5 = map.addTilesetImage("tuxmon", "tuxmonIMG");
let Tiles6 = map.addTilesetImage("village", "villaIMG");

//Step 5, create an array of tiles
let tilesArray = [
  Tiles1,
  Tiles2,
  Tiles3,
  Tiles4,
  Tiles5,
  Tiles6,
];

//Step 6, load in layer by layer
this.bgLayer = map.createLayer("bg",tilesArray,0,0);
this.famLayer = map.createLayer("Fam",tilesArray,0,0);
this.thingLayer = map.createLayer("thing",tilesArray,0,0);
this.fingerLayer = map.createLayer("finger",tilesArray,0,0);

this.anims.create({
  key: "gen2-up",
  frames: this.anims.generateFrameNumbers("gen2", { start: 105, end: 112 }),
  frameRate: 5,
  repeat: -1,
});

this.anims.create({
  key: "gen2-left",
  frames: this.anims.generateFrameNumbers("gen2", { start: 118, end: 125 }),
  frameRate: 5,
  repeat: -1,
});

this.anims.create({
  key: "gen2-down",
  frames: this.anims.generateFrameNumbers("gen2", { start: 131, end: 138 }),
  frameRate: 5,
  repeat: -1,
});

this.anims.create({
  key: "gen2-right",
  frames: this.anims.generateFrameNumbers("gen2", { start: 144, end: 151 }),
  frameRate: 5,
  repeat: -1,
});

var start = map.findObject("s",obj => obj.name === "s");
this.player = this.physics.add.sprite(start.x, start.y, "gen2");
window.player = this.player;

// create the arrow keys
this.cursors = this.input.keyboard.createCursorKeys();

// var level3Down = this.input.keyboard.addKey("3");

//   rDown.on(
//     "down",
//     function () {
//       console.log("R pressed (reload game)");
//       this.scene.start("gameScene");
//     },
//     this
//   );

//   aDown.on(
//     "down",
//     function () {
//       console.log("A pressed (main menu)");
//       this.scene.start("preloadScene");
//     },
//     this
//   );

var level2Down = this.input.keyboard.addKey(50);

// level2Down.on(
//   "down",
//   function () {
//     console.log("2 pressed, jump to level 2");
//     this.scene.start("level2");
//   },
//   this
// );

// make the camera follow the player
this.cameras.main.startFollow(this.player);


} // end of create //


update() {
this.famLayer.setCollisionByExclusion(-1, true);
this.physics.add.collider(this.player, this.famLayer);

this.thingLayer.setCollisionByExclusion(-1, true);
this.physics.add.collider(this.player, this.thingLayer);

this.player.body.setSize(this.player.width * 0.2, this.player.height * 0.5)

if (this.cursors.left.isDown) {
this.player.setVelocityX(-160);
this.player.anims.play("gen2-left", true);
} else if (this.cursors.right.isDown) {
this.player.setVelocityX(160);
this.player.anims.play("gen2-right", true);
} else if (this.cursors.up.isDown) {
this.player.setVelocityY(-160);
this.player.anims.play("gen2-up", true);
} else if (this.cursors.down.isDown) {
this.player.setVelocityY(160);
this.player.anims.play("gen2-down", true);
} else {
this.player.setVelocity(0);
this.player.anims.stop();
}
if (
  this.player.x > 1262 &&
  this.player.y > 688 &&
  this.player.y < 752
) {
  console.log("Door4");
  this.level3();
}
} // end of update //

level3(player, tile) {
  console.log("level3");
  this.scene.start("level3",);
}
}