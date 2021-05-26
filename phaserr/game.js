
//var scene = new Phaser.Scene('game');

var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
    parent: 'game',
    physics:{
        default: 'arcade',
        decade:{
            gravity:{y:300},
            debug:false
        }
    },
	scene : {
        preload:preload,
        create:create,
        update:update,
    }
};

// Create the game with our config values
var game = new Phaser.Game(config);
var score = 0;
var scoreKeep;

function preload() {
    this.load.image('background','assets/background.png');
    this.load.image('prize','assets/prize.png');
    this.load.image('enemy','assets/enemy.png');
    this.load.image('platform','assets/platform.jpeg');
    this.load.image('ground','assets/ground.jpeg');
    this.load.spritesheet('player','assets/player.png',{ frameWidth: 30, frameHeight: 32 });
};

function create() {
    
    //Add background
    var bg = this.add.image(0,0,'background');
    bg.setOrigin(0,0);

    //Add score count
    scoreKeep = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    //Add platforms
    platforms = this.physics.add.staticGroup();
    platforms.create(400,590,'ground').setScale(2).refreshBody();
    platforms.create(100,400,'platform');
    platforms.create(380,240, 'platform');
    platforms.create(750,150,'platform');
    platforms.create(580,375,'platform');

    //Add enemies
    enemy = this.physics.add.group({
        key: 'enemy',
        repeat: 2,
        setXY: {x: 50, y: 100, stepX: 200}
    });
    enemy.children.iterate(function(child){
        child.setCollideWorldBounds(true);
        child.setBounce(1);
        child.setVelocity(Phaser.Math.Between(-200, 200), 20);
    })

    //Add prize
    prize = this.physics.add.group({
        key: 'prize',
        repeat: 3,
        setXY: {x: 25, y: 100, stepX: 250}
    });
    prize.children.iterate(function(child){
        child.setCollideWorldBounds(true);
       // child.setVelocityY(300);
        child.setGravityY(300);
        //child.setBounce(1);
        //child.setBounceY(Phaser.Math.FloatBetween(0.4,0.6));
    })
    
    //Add player
    player = this.physics.add.sprite(450,500,'player');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
        key:'left',
        frames:this.anims.generateFrameNumbers('player',{start:3, end:5}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames:[{key: 'player',frame:0}],
        frameRate:20
    });

    this.anims.create({
        key:'right',
        frames:this.anims.generateFrameNumbers('player',{start:6,end:8}),
        frameRate: 10,
        repeat: -1
    });
    player.body.setGravityY(350); //Add physics to the player
    
    //Colliders for game objects
    this.physics.add.collider(player, platforms); //Makes it so that the player collides with platforms
    this.physics.add.collider(player,enemy);//Makes it so that player collides with enemies
    this.physics.add.collider(enemy,platforms);//Makes it so that enemies collide with platforms
    this.physics.add.collider(prize,platforms);
    this.physics.add.collider(enemy,enemy);
    this.physics.add.collider(player,prize);
    this.physics.add.overlap(player,prize,function(player,prize){
        star.disableBody(true,true);
        score+=10;
        scoreKeep.setText('Score: ' + score);
    });
    //Create cursors for controls
    cursors = this.input.keyboard.createCursorKeys();
};


function update() {

    if (cursors.left.isDown)
{
    player.setVelocityX(-160);

    player.anims.play('left', true);
}
else if (cursors.right.isDown)
{
    player.setVelocityX(160);

    player.anims.play('right', true);
}
else
{
    player.setVelocityX(0);

    player.anims.play('turn');
}

if (cursors.up.isDown && player.body.touching.down)
{
    player.setVelocityY(-350);
}


};
