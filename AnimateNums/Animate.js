
var scene = {
	"frames": [
		{
			"filename": "tile000.png",
			"frame": {
				"x": 2,
				"y": 2,
				"w": 161,
				"h": 154
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 161,
				"h": 154
			},
			"sourceSize": {
				"w": 161,
				"h": 154
			}
		},
		{
			"filename": "tile001.png",
			"frame": {
				"x": 2,
				"y": 160,
				"w": 161,
				"h": 154
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 161,
				"h": 154
			},
			"sourceSize": {
				"w": 161,
				"h": 154
			}
		},
		{
			"filename": "tile002.png",
			"frame": {
				"x": 2,
				"y": 318,
				"w": 161,
				"h": 154
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 161,
				"h": 154
			},
			"sourceSize": {
				"w": 161,
				"h": 154
			}
		},
		{
			"filename": "tile003.png",
			"frame": {
				"x": 2,
				"y": 476,
				"w": 161,
				"h": 154
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 161,
				"h": 154
			},
			"sourceSize": {
				"w": 161,
				"h": 154
			}
		},
		{
			"filename": "tile004.png",
			"frame": {
				"x": 2,
				"y": 634,
				"w": 160,
				"h": 154
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 160,
				"h": 154
			},
			"sourceSize": {
				"w": 160,
				"h": 154
			}
		},
		{
			"filename": "tile005.png",
			"frame": {
				"x": 2,
				"y": 792,
				"w": 161,
				"h": 154
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 161,
				"h": 154
			},
			"sourceSize": {
				"w": 161,
				"h": 154
			}
		},
		{
			"filename": "tile006.png",
			"frame": {
				"x": 2,
				"y": 950,
				"w": 161,
				"h": 154
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 161,
				"h": 154
			},
			"sourceSize": {
				"w": 161,
				"h": 154
			}
		},
		{
			"filename": "tile007.png",
			"frame": {
				"x": 2,
				"y": 1108,
				"w": 161,
				"h": 154
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 161,
				"h": 154
			},
			"sourceSize": {
				"w": 161,
				"h": 154
			}
		},
		{
			"filename": "tile008.png",
			"frame": {
				"x": 2,
				"y": 1266,
				"w": 161,
				"h": 154
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 161,
				"h": 154
			},
			"sourceSize": {
				"w": 161,
				"h": 154
			}
		},
		{
			"filename": "tile009.png",
			"frame": {
				"x": 2,
				"y": 1424,
				"w": 160,
				"h": 154
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 160,
				"h": 154
			},
			"sourceSize": {
				"w": 160,
				"h": 154
			}
		}
    ],
	"meta": {
		"app": "http://www.codeandweb.com/texturepacker",
		"version": "1.0",
		"image": "spritesheet.png",
		"format": "RGBA8888",
		"size": {
			"w": 165,
			"h": 1580
		},
		"scale": "1"
	}
}

var img=document.createElement('img');
img.src='spritesheet (1).png';
counter = 0;
function start()  { 
    var stop = setInterval(countNums,500);
 }

function countNums(){
    var context = document.getElementById("area").getContext("2d");
    context.fillRect(50,50,100,100);
    if(counter>9){
        context.drawImage(img,scene.frames[1].frame.x,scene.frames[1].frame.y,scene.frames[1].frame.w,scene.frames[1].frame.h,20,50,70,100);
        context.drawImage(img,scene.frames[0].frame.x,scene.frames[0].frame.y,scene.frames[0].frame.w,scene.frames[0].frame.h,90,50,90,100);
		clearInterval(stop);
    }
    else {
		context.drawImage(img,scene.frames[counter].frame.x,scene.frames[counter].frame.y,scene.frames[counter].frame.w,scene.frames[counter].frame.h,60,50,80,100);
		counter++;
	}
        
        
}
