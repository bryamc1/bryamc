var img=document.createElement('img');
img.src='spritesheet (2).png';
var counter = 0;

window.onload = function(){
    start();

}

function start()  { 
    var stop = setInterval(countNums,100);
 }

function countNums(){
    var context = document.getElementById("spritearea").getContext("2d");
	context.drawImage(img,fightscene.frames[counter].frame.x, fightscene.frames[counter].frame.y,fightscene.frames[counter].frame.w,fightscene.frames[counter].frame.h,0,0,500,300);
	counter++;

    if(counter>30){
        talk(context);
    }
    if (counter == 46) {
         counter = 0;
    }

}

function talk(context){
    context.fillStyle = "white";
    context.moveTo(410,90);
    context.lineTo(350,200);
    context.lineTo(450,200);
    context.lineTo(410,90);
    context.stroke();
    context.fill();
    
    context.beginPath();
    context.arc(400,200,50,0,2*Math.PI);
    context.stroke();
    context.fill();
    context.fillStyle = "black";
    context.font = "20px sans";
    context.fillText("OH SH*T!",357,200);
}
