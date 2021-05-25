//This function draws the keywords on the canvas
const draw = document.getElementById('myCanvas').getContext('2d');
function writeCommands() {
        draw.font = '100px Arial';
        draw.fillText('Chair', 350, 100);
        draw.fillText('Shoe',350,200);
        draw.fillText('Food',350,300);
        draw.fillText('Car',350,400);
        draw.fillText('Myself',350,500);
}
writeCommands();

var recognition = new webkitSpeechRecognition();

//This function initializes the recognition object and changes value of button accordingly
var start = document.getElementById('button');
function speak() { 
    if(start.innerHTML == 'Speak') {
        start.innerHTML = 'Stop'
        writeCommands();
        recognition.start();
    }
    else {
        start.innerHTML = 'Speak';
        draw.clearRect(0,0,900,600);
        writeCommands();
        recognition.abort();
    }
}

//Array of pics for quick access
var pics = [
    {name: 'chair', image: 'pics/chair.jpeg'},
    {name: 'shoe', image: 'pics/shoes.jpeg'},
    {name: 'food', image: 'pics/food.jpeg'},
    {name: 'car', image: 'pics/car.jpeg'},
    {name: 'myself', image: 'pics/clown.jpeg'}
];

//Function that actually draw image, called on by onresult
function drawPic(image){
    draw.clearRect(0,0,900,600);
    var pic = new Image();
    pic.src = image;
    pic.onload = function(){
        draw.drawImage(pic, 0, 0,900,600);
    };
}
console.log(draw.width);
//This function takes the result of the user and displays an image accordingly
recognition.onresult = function(event) {
    var keyword = event.results[0][0].transcript;
    if(keyword == 'about'){
        window.speechSynthesis.speak(new SpeechSynthesisUtterance('Bryam Cuzco, Copyright 2021'));
    }else if(keyword == 'help'){
        window.speechSynthesis.speak(new SpeechSynthesisUtterance('Say a name of the object to see the object on the screen'));
    }else if(keyword == 'chair'){
        drawPic(pics[0].image);
    }else if(keyword == 'shoe'){
        drawPic(pics[1].image);
    }else if(keyword == 'food'){
        drawPic(pics[2].image);
    }else if(keyword == 'car'){
        drawPic(pics[3].image);
    }else if(keyword == 'myself'){
        drawPic(pics[4].image);
    }else{
        window.speechSynthesis.speak(new SpeechSynthesisUtterance('No matches'));
        draw.clearRect(0,0,900,600);
        draw.fillText('Unknown',250,300);
    }
}


recognition.onspeechend = function(){
    recognition.stop();
}

