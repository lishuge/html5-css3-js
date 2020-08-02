var ctx = document.getElementById("world_map_data").getContext('2d');
var img=new Image();
img.src='images/map1.png';
img.onload=function(){
    ctx.drawImage(img,150,20);
}
// 文字
ctx.fillStyle="#333";
ctx.font="12px arial";
ctx.fillText(">=100000人",20,338);
ctx.fillText("10000-99999人",20,360);
ctx.fillText("1000-9999人",20,382);
ctx.fillText("500-999人",20,404);
ctx.fillText("100-499人",20,426);
ctx.fillText("10-99人",20,448);
ctx.fillText("1-9人",20,470);
ctx.fillText("0",20,492);
// 指示颜色方块

ctx.lineJoin="round";
ctx.lineWidth=8;
ctx.fillStyle="#440F11"
ctx.fillRect(5,328,10,10)
ctx.fillStyle="#841715"
ctx.fillRect(5,350,10,10)
ctx.fillStyle="#C52625"
ctx.fillRect(5,372,10,10)
ctx.fillStyle="#E74949"
ctx.fillRect(5,394,10,10)
ctx.fillStyle="#EC8972"
ctx.fillRect(5,416,10,10)
ctx.fillStyle="#EC8972"
ctx.fillRect(5,438,10,10)
ctx.fillStyle="#FCF0D0"
ctx.fillRect(5,460,10,10)
ctx.fillRect(5,482,10,10)
