var c = document.getElementById('e2n');
var ctx = c.getContext('2d');
//E
ctx.beginPath();
ctx.moveTo(200,100);
ctx.lineTo(100,100);
ctx.lineTo(100,270);
ctx.lineTo(200,270);
ctx.lineWidth= 5;
ctx.stroke();
ctx.beginPath();
ctx.moveTo(100,270);
ctx.lineTo(100,400);
ctx.lineTo(200,400);
ctx.lineWidth= 5;
ctx.stroke();
//N
ctx.beginPath();
ctx.moveTo(430,400);
ctx.lineTo(432,100);
ctx.lineTo(652,400);
ctx.lineTo(652,100);
ctx.stroke();
//2
ctx.beginPath();
ctx.moveTo(200,100);
ctx.quadraticCurveTo(685,-180,150,500);
ctx.lineTo(360,450);
ctx.lineWidth= 15;
ctx.strokeStyle = "#EA5222";
ctx.stroke();
//Losange n°1
ctx.beginPath();
ctx.moveTo(750,100);
ctx.lineTo(730,120);
ctx.lineTo(730,140);
ctx.lineTo(750,160);
ctx.lineTo(770,140);
ctx.lineTo(770,120);
ctx.closePath();
ctx.lineWidth= 1;
ctx.fillStyle = "#EBEBEB";
ctx.fill();

//Losange n°2
ctx.beginPath();
ctx.moveTo(730,150);
ctx.lineTo(710,170);
ctx.lineTo(710,190);
ctx.lineTo(730,210);
ctx.lineTo(750,190);
ctx.lineTo(750,170);
ctx.closePath();
ctx.lineWidth= 1;
ctx.fillStyle = "#DBDADB";
ctx.fill();

//Losange n°3
ctx.beginPath();
ctx.moveTo(780,150);
ctx.lineTo(760,170);
ctx.lineTo(760,190);
ctx.lineTo(780,210);
ctx.lineTo(800,190);
ctx.lineTo(800,170);
ctx.closePath();
ctx.lineWidth= 1;
ctx.fillStyle = "#595656";
ctx.fill();

//Losange n°4
ctx.beginPath();
ctx.moveTo(750,200);
ctx.lineTo(730,220);
ctx.lineTo(730,240);
ctx.lineTo(750,260);
ctx.lineTo(770,240);
ctx.lineTo(770,220);
ctx.closePath();
ctx.lineWidth= 1;
ctx.fillStyle = "#EA4E1A";
ctx.fill();

//Losange n°5
ctx.beginPath();
ctx.moveTo(730,250);
ctx.lineTo(710,270);
ctx.lineTo(710,290);
ctx.lineTo(730,310);
ctx.lineTo(750,290);
ctx.lineTo(750,270);
ctx.closePath();
ctx.lineWidth= 1;
ctx.fillStyle = "#878787";
ctx.fill();

//Losange n°6
ctx.beginPath();
ctx.moveTo(780,250);
ctx.lineTo(760,270);
ctx.lineTo(760,290);
ctx.lineTo(780,310);
ctx.lineTo(800,290);
ctx.lineTo(800,270);
ctx.closePath();
ctx.lineWidth= 1;
ctx.fillStyle = "#ECECEC";
ctx.fill();

//Petit losange n°1
ctx.beginPath();
ctx.moveTo(810,180);
ctx.lineTo(805,185);
ctx.lineTo(805,190);
ctx.lineTo(810,195);
ctx.lineTo(815,190);
ctx.lineTo(815,185);
ctx.closePath();
ctx.lineWidth= 1;
ctx.fillStyle = "#EBEBEB";
ctx.fill();

//Petit losange n°2
ctx.beginPath();
ctx.moveTo(820,190);
ctx.lineTo(815,195);
ctx.lineTo(815,200);
ctx.lineTo(820,205);
ctx.lineTo(825,200);
ctx.lineTo(825,195);
ctx.closePath();
ctx.lineWidth= 1;
ctx.fillStyle = "#878787";
ctx.fill();

//Petit losange n°3
ctx.beginPath();
ctx.moveTo(840,185);
ctx.lineTo(835,190);
ctx.lineTo(835,195);
ctx.lineTo(840,200);
ctx.lineTo(845,195);
ctx.lineTo(845,190);
ctx.closePath();
ctx.lineWidth= 1;
ctx.fillStyle = "#EA4E1A";
ctx.fill();

//Texte
ctx.font = "35pt Calibri";
ctx.fillStyle = '#878787';
ctx.fillText("École du Numérique", 420, 450);
ctx.fillText("du Noyonnais", 415, 500);
