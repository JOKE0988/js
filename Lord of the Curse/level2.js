class level2 extends Phaser.Scene {

  constructor (){
    super({key: 'level2' });
    this.cuCount = 0;
    this.xCount = 0;
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

  this.load.spritesheet("vi","assets/vi.png", {
    frameWidth: 64,
    frameHeight: 64,
    });

    this.load.spritesheet("ye","assets/ye.png", {
      frameWidth: 64,
      frameHeight: 64,
      });

  this.load.image("cu", "assets/cu.png", {
    // frameWidth: 260,
    // frameHeight: 280,
    });

} // end of preload //

  create (){

    this.timedEvent = this.time.addEvent({ delay: 10000, callback: this.delay10Seconds, callbackScope: this, loop: false });

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

// shirt object
let f = map.findObject("s", (obj) => obj.name === "f");
let f1 = map.findObject("s", (obj) => obj.name === "f1");
let f2 = map.findObject("s", (obj) => obj.name === "f2");
let f3 = map.findObject("s", (obj) => obj.name === "f3");
let f4 = map.findObject("s", (obj) => obj.name === "f4");
let f5 = map.findObject("s", (obj) => obj.name === "f5");
let k1 = map.findObject("s", (obj) => obj.name === "k1");
let k2 = map.findObject("s", (obj) => obj.name === "k2");
let k3 = map.findObject("s", (obj) => obj.name === "k3");
let k4 = map.findObject("s", (obj) => obj.name === "k4");
// let shirt2 = map.findObject("Object Layer 1", (obj) => obj.name === "shirt2");
// let shirt3 = map.findObject("Object Layer 1", (obj) => obj.name === "shirt3");

this.f = this.physics.add.sprite(f.x, f.y, "cu").setScale(1)
this.f1 = this.physics.add.sprite(f1.x, f1.y, "cu").setScale(1)
this.f2 = this.physics.add.sprite(f2.x, f2.y, "cu").setScale(1)
this.f3 = this.physics.add.sprite(f3.x, f3.y, "cu").setScale(1)
this.f4 = this.physics.add.sprite(f4.x, f4.y, "cu").setScale(1)
this.f5 = this.physics.add.sprite(f5.x, f5.y, "cu").setScale(1)

this.k1 = this.physics.add.sprite(k1.x, k1.y, "vi").setScale(1)
this.k2 = this.physics.add.sprite(k2.x, k2.y, "vi").setScale(1)
this.k3 = this.physics.add.sprite(k3.x, k3.y, "ye").setScale(1)
this.k4 = this.physics.add.sprite(k4.x, k4.y, "ye").setScale(1)
// this.enemy2 = this.physics.add.sprite(shirt2.x, shirt2.y, "shirt").play("shirtMove").setScale(0.7)
// this.enemy3 = this.physics.add.sprite(shirt3.x, shirt3.y, "shirt").play("shirtMove").setScale(0.7)
// in create, add tweens  
this.tweens.add({
  targets: this.k1,
  y: 200,
  //flipX: true,
  yoyo: true,
  duration: 2000,
  repeat: -1
})

this.tweens.add({
  targets: this.k2,
  x: 1000,
  //flipX: true,
  yoyo: true,
  duration: 2000,
  repeat: -1
})

this.tweens.add({
  targets: this.k3,
  x: 1000,
  //flipX: true,
  yoyo: true,
  duration: 2000,
  repeat: -1
})

this.tweens.add({
  targets: this.k4,
  y: 200,
  //flipX: true,
  yoyo: true,
  duration: 2000,
  repeat: -1
})

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

//Collectables (enemy)
this.physics.add.overlap(this.player, this.k1, this.collectx, null, this);
this.physics.add.overlap(this.player, this.k2, this.collectx, null, this);
this.physics.add.overlap(this.player, this.k3, this.collectx, null, this);
this.physics.add.overlap(this.player, this.k4, this.collectx, null, this);

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

// Check for the cuCount
if (this.cuCount > 5 ) {
  console.log('Collected 6 cu, jump to boss');
  this.scene.start("boss");
}

// Check for the xCount
if (this.xCount > 0 ) {
  console.log('die');
  this.scene.start("lost");
}

} // end of update //

delay40Seconds(){
    
  // this.timeSnd.play();
  console.log("after 60 secs");
  window.count1.stop();
  this.scene.stop("listScene1");
  this.scene.start("level1");
  }  

level3(player, tile) {
  console.log("boss");
  this.scene.start("boss",);
}
// Collect cu
collectcu(player, item) {
  console.log("collectcu");
  this.cuCount++
  // this.cameras.main.shake(200);
  item.disableBody(true, true); // remove cu
  return false;
}

// Collect x
collectx(player, item) {
  console.log("collectx");
  this.xCount++
  // this.cameras.main.shake(200);
  item.disableBody(true, true); // remove cu
  return false;
}

}