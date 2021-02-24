            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            ctx.fillStyle = "rgb(173,216,230";
            ctx.fillRect(0,0,myCanvas.width,myCanvas.height);
               
            //Draw the sun
            ctx.beginPath();
            ctx.arc(30,15,120,0,2*Math.PI);
            ctx.fillStyle = "Yellow";
            ctx.stroke();
            ctx.fill();
            
             //Draw the sea
            ctx.beginPath();
            ctx.fillStyle = "rgb(0,105,148)";
            ctx.fillRect(0,450,myCanvas.width,150);
            ctx.fill();
            
            //Draw cloud
            ctx.beginPath();
            ctx.moveTo(400,100);
            ctx.bezierCurveTo(400,110,550,110,550,100);
            ctx.bezierCurveTo(575,80,575,50,525,50);
            //ctx.bezierCurveTo();
            ctx.lineWidth = 3;
            ctx.fillStyle = 'White';
            ctx.fill();
            ctx.strokeStyle = '#666666';
            ctx.stroke();
            ctx.closePath();
           
            
            //Draw boat
            ctx.beginPath();
            ctx.lineWidth = 4;
            ctx.moveTo(100,400);
            ctx.lineTo(125,450);
            ctx.lineTo(300,450);
            ctx.lineTo(325,400);
            ctx.moveTo(100,400);
            ctx.lineTo(325,400);
            ctx.moveTo(212.5,400);
            ctx.lineTo(212.5,300);
            ctx.fillStyle = "rgb(193,154,107)";
            ctx.fill();
            ctx.stroke();
            
            //Draw flag
            ctx.beginPath();
            ctx.fillStyle = "rgb(255,145,145";
            ctx.linewidth = 4;
            ctx.strokeRect(212.5,300,60,40);
            ctx.fillRect(212.5,300,60,40);



