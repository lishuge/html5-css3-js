/* 世界疫情发展趋势 */
// 绘画第一个图
var ctx=document.getElementById("graphic_canvas_data").getContext('2d')
ctx.moveTo(70,355);ctx.lineTo(574,355);
ctx.strokeStyle="rgba(128, 128, 128,0.3)";
ctx.stroke();
ctx.strokeStyle="rgba(128, 128, 128,0.4)";
ctx.moveTo(70,302);ctx.lineTo(574,302);
ctx.moveTo(70,249);ctx.lineTo(574,249);
ctx.moveTo(70,196);ctx.lineTo(574,196);
ctx.moveTo(70,143);ctx.lineTo(574,143);
ctx.moveTo(70,90);ctx.lineTo(574,90);
ctx.moveTo(70,37);ctx.lineTo(574,37);
ctx.stroke();
// 纵排文字
ctx.fillText('18,000,000', 8,40);
ctx.fillText('15,000,000', 8,93);
ctx.fillText('12,000,000', 8,146);
ctx.fillText('9,000,000', 15,199);
ctx.fillText('6,000,000', 15,252);
ctx.fillText('3,000,000', 15,305);
ctx.fillText('0', 57,358);
// 横排文字
ctx.fillText('07-16',77,374);
ctx.fillText('07-17',119,374);
ctx.fillText('07-18',161,374);
ctx.fillText('07-19',203,374);
ctx.fillText('07-20',245,374);
ctx.fillText('07-21',287,374);
ctx.fillText('07-22',329,374);
ctx.fillText('07-23',371,374);
ctx.fillText('07-24',413,374);
ctx.fillText('07-25',455,374);
ctx.fillText('07-26',497,374);
ctx.fillText('07-27',539,374);
///* 坐标上重要点 */
var points = [[90,341],[132,341],[174,341],[216,341],[258,341],[300,341],[342,341],[384,341],[426,341],[468,341],[510,341],[552,341]];
//在坐标中画点 使用循环遍历数组中的坐标
//设置颜色
ctx.fillStyle = "#333333";
points.forEach(function(arr){
    ctx.fillRect(arr[0],arr[1],2.2,2.2);
});
//根据点连线
//防止重绘
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = "#333333";
points.forEach(function (arr) {
    ctx.lineTo(arr[0]+1.1 ,arr[1]+1.1 );
});
ctx.stroke();
var points = [[90,113],[132,109],[174,105],[216,101],[258,96],[300,91],[342,86],[384,81],[426,77],[468,73],[510,70],[552,67]];
ctx.fillStyle = "#A31E1D";
points.forEach(function(arr){
    ctx.fillRect(arr[0],arr[1],2.2,2.2);
});
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = "#A31E1D";
points.forEach(function (arr) {
    ctx.lineTo(arr[0]+1.1 ,arr[1]+1.1);
});
ctx.stroke();

var points = [[90,166],[132,163],[174,161],[216,159],[258,155],[300,150],[342,147],[384,144],[426,141],[468,138],[510,135],[552,132]];
ctx.fillStyle = "#53AD77";
points.forEach(function(arr){
    ctx.fillRect(arr[0],arr[1],2.2,2.2);
});
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = "#53AD77";
points.forEach(function (arr) {
    ctx.lineTo(arr[0]+1.1 ,arr[1]+1.1 );
});
ctx.stroke();

/* 第二个图  ------------------------------- */
var ctx=document.getElementById("graphic_canvas_ratio").getContext('2d')
ctx.moveTo(45,355);ctx.lineTo(574,355);
ctx.strokeStyle="rgba(128, 128, 128,0.3)";
ctx.stroke();
ctx.strokeStyle="rgba(128, 128, 128,0.4)";
ctx.moveTo(45,302);ctx.lineTo(574,302);
ctx.moveTo(45,249);ctx.lineTo(574,249);
ctx.moveTo(45,196);ctx.lineTo(574,196);
ctx.moveTo(45,143);ctx.lineTo(574,143);
ctx.moveTo(45,90);ctx.lineTo(574,90);
ctx.moveTo(45,37);ctx.lineTo(574,37);
ctx.stroke();
// 纵排文字
ctx.fillText('0.6', 24,40);
ctx.fillText('0.5', 24,93);
ctx.fillText('0.4', 24,146);
ctx.fillText('0.3', 24,199);
ctx.fillText('0.2', 24,252);
ctx.fillText('0.1', 24,305);
ctx.fillText('0', 31,358);
// 横排文字
ctx.fillText('07-16',55,374);
ctx.fillText('07-17',99,374);
ctx.fillText('07-18',143,374);
ctx.fillText('07-19',187,374);
ctx.fillText('07-20',231,374);
ctx.fillText('07-21',275,374);
ctx.fillText('07-22',319,374);
ctx.fillText('07-23',363,374);
ctx.fillText('07-24',407,374);
ctx.fillText('07-25',451,374);
ctx.fillText('07-26',495,374);
ctx.fillText('07-27',539,374);

///* 坐标上重要点 */
var points = [[70,331],[112,331],[154,331],[206,331],[248,331],[290,331],[332,331],[374,331],[416,331],[448,331],[500,331],[542,331]];
//在坐标中画点 使用循环遍历数组中的坐标
//设置颜色
ctx.fillStyle = "#333333";
points.forEach(function(arr){
    ctx.fillRect(arr[0],arr[1],2.2,2.2);
});
//根据点连线
//防止重绘
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = "#333333";
points.forEach(function (arr) {
    ctx.lineTo(arr[0]+1.1 ,arr[1]+1.1 );
});
ctx.stroke();
var points = [[70,57],[112,56],[154,56],[206,56.5],[248,56],[290,56],[332,56],[374,56],[416,54],[448,53],[500,52],[542,51]];
ctx.fillStyle = "#53AD77";
points.forEach(function(arr){
    ctx.fillRect(arr[0],arr[1],2.2,2.2);
});
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = "#53AD77";
points.forEach(function (arr) {
    ctx.lineTo(arr[0]+1.1 ,arr[1]+1.1 );
});
ctx.stroke();