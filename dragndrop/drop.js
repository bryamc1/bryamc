var settings = {
    type: Phaser.AUTO,
    width: 800,
    height: 630,
    backgroundColor: 'black',
    parent: 'game',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(settings);

function preload(){
    //Background
    this.load.image('farm','assets/farm.jpeg');

    //Preload images of objects
    this.load.image('cow','assets/cow.png');
    this.load.image('chicken','assets/chicken.png');
    this.load.image('pig','assets/pig.png');
    this.load.image('farmer','assets/farmer.png');
    this.load.image('guyintractor','assets/guyintractor.png');
}

function create(){
    this.add.sprite(300,250,'farm');
    var cow = this.add.sprite(100,300,'cow').setInteractive();
    var chicken = this.add.sprite(200,200,'chicken').setInteractive();
    var pig = this.add.sprite(300,300,'pig').setInteractive();
    var farmer = this.add.sprite(500,300,'farmer').setInteractive();
    var guyintractor = this.add.sprite(425,425,'guyintractor').setInteractive();

    // Make objects draggable
    this.input.setDraggable(cow);
    this.input.setDraggable(chicken);
    this.input.setDraggable(pig);
    this.input.setDraggable(farmer);
    this.input.setDraggable(guyintractor);

    this.input.on('drag', function(pointer, gameObject, dragX, dragY){
        gameObject.x = dragX;
        gameObject.y = dragY;
    });
} 