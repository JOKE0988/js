class level1 extends Phaser.Scene {

  constructor (){
      super({key: 'level1' });
      this.cuCount = 0;
  }

  preload () {
//Step 1, load JSON
  this.load.tilemapTiledJSON("map1","assets/level1.tmj");

//Step 2, peload any images here
  this.load.image("atlasIMG","assets/misc_atlas.png")
  this.load.image("shadowIMG","assets/Maintilemap_Shadows.png")
  this.load.image("streetIMG","assets/Street32x32.png")
  this.load.image("tuxmonIMG","assets/tuxmon-32x32.png")
  this.load.image("villaIMG","assets/village32x32.png")
  this.load.image("demonIMG","assets/defimon2.png")

  this.load.spritesheet("gen1","assets/talo.png", {
  frameWidth: 64,
  frameHeight: 64,
  });

  this.load.spritesheet("diren","assets/ye.png", {
    frameWidth: 64,
    frameHeight: 64,
    });

  this.load.image("cu", "assets/cu.png", {
    // frameWidth: 260,
    // frameHeight: 280,
    });

} // end of preload //

  create (){

  // console.log("animationScene")

//Step 3, create the map from main
let map = this.make.tilemap ({key: "map1"});

//Step 4, load the game tiles
//1st parameter is name in Tiled,
//2nd parameter is key in Preload

let Tiles1 = map.addTilesetImage("defimon", "demonIMG");
let Tiles2 = map.addTilesetImage("shadow", "shadowIMG");
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
this.grassLayer = map.createLayer("grass",tilesArray,0,0);
this.thingLayer = map.createLayer("thing",tilesArray,0,0);
this.fingerLayer = map.createLayer("finger",tilesArray,0,0);

this.anims.create({
  key: "gen-up",
  frames: this.anims.generateFrameNumbers("gen1", { start: 105, end: 112 }),
  frameRate: 5,
  repeat: -1,
});

this.anims.create({
  key: "gen-left",
  frames: this.anims.generateFrameNumbers("gen1", { start: 118, end: 125 }),
  frameRate: 5,
  repeat: -1,
});

this.anims.create({
  key: "gen-down",
  frames: this.anims.generateFrameNumbers("gen1", { start: 131, end: 138 }),
  frameRate: 5,
  repeat: -1,
});

this.anims.create({
  key: "gen-right",
  frames: this.anims.generateFrameNumbers("gen1", { start: 144, end: 151 }),
  frameRate: 5,
  repeat: -1,
});

//ojl
var start = map.findObject("s",obj => obj.name === "s");
this.player = this.physics.add.sprite(start.x, start.y, "gen1");
window.player = this.player;

// cu object
let f = map.findObject("s", (obj) => obj.name === "f");
let f1 = map.findObject("s", (obj) => obj.name === "f1");
let f2 = map.findObject("s", (obj) => obj.name === "f2");
let f3 = map.findObject("s", (obj) => obj.name === "f3");
let f4 = map.findObject("s", (obj) => obj.name === "f4");
let f5 = map.findObject("s", (obj) => obj.name === "f5");
// let shirt2 = map.findObject("Object Layer 1", (obj) => obj.name === "shirt2");
// let shirt3 = map.findObject("Object Layer 1", (obj) => obj.name === "shirt3");

this.f = this.physics.add.sprite(f.x, f.y, "cu").setScale(1)
this.f1 = this.physics.add.sprite(f1.x, f1.y, "cu").setScale(1)
this.f2 = this.physics.add.sprite(f2.x, f2.y, "cu").setScale(1)
this.f3 = this.physics.add.sprite(f3.x, f3.y, "cu").setScale(1)
this.f4 = this.physics.add.sprite(f4.x, f4.y, "cu").setScale(1)
this.f5 = this.physics.add.sprite(f5.x, f5.y, "cu").setScale(1)
// this.enemy2 = this.physics.add.sprite(shirt2.x, shirt2.y, "shirt").play("shirtMove").setScale(0.7)
// this.enemy3 = this.physics.add.sprite(shirt3.x, shirt3.y, "shirt").play("shirtMove").setScale(0.7)
// in create, add tweens  


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

//Collectables (cucambe)
this.physics.add.overlap(this.player, this.f, this.collectcu, null, this);
this.physics.add.overlap(this.player, this.f1, this.collectcu, null, this);
this.physics.add.overlap(this.player, this.f2, this.collectcu, null, this);
this.physics.add.overlap(this.player, this.f3, this.collectcu, null, this);
this.physics.add.overlap(this.player, this.f4, this.collectcu, null, this);
this.physics.add.overlap(this.player, this.f5, this.collectcu, null, this);


} // end of create //


update() {
this.grassLayer.setCollisionByExclusion(-1, true);
this.physics.add.collider(this.player, this.grassLayer);

this.thingLayer.setCollisionByExclusion(-1, true);
this.physics.add.collider(this.player, this.thingLayer);

this.player.body.setSize(this.player.width * 0.2, this.player.height * 0.5)

if (this.cursors.left.isDown) {
this.player.setVelocityX(-160);
this.player.anims.play("gen-left", true);
} else if (this.cursors.right.isDown) {
this.player.setVelocityX(160);
this.player.anims.play("gen-right", true);
} else if (this.cursors.up.isDown) {
this.player.setVelocityY(-160);
this.player.anims.play("gen-up", true);
} else if (this.cursors.down.isDown) {
this.player.setVelocityY(160);
this.player.anims.play("gen-down", true);
} else {
this.player.setVelocity(0);
this.player.anims.stop();
}
if (
  this.player.x > 1257 &&
  this.player.y > 176 &&
  this.player.y < 208
) {
  console.log("Door1");
  this.level2();
}

// Check for the pantsCount
if (this.cuCount > 5 ) {
  console.log('Collected 6 cu, jump to warning');
  this.scene.start("warning");
}

} // end of update //

level2(player, tile) {
  console.log("warning");
  this.scene.start("warning",);
}
// Collect cu
collectcu(player, item) {
  console.log("collectcu");
  this.cuCount++
  // this.cameras.main.shake(200);
  item.disableBody(true, true); // remove cu
  return false;
}

}
