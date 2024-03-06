campoX=20,campoY=40,campoW=960,campoH=500;
dirJy=0;
vel=5, frames=40, dificuldade=1,pontos=0;
function iniBola(){
if((Math.random()*10)<5){
dirBolaX=-1;
}else{
dirBolaX=1;
}
if((Math.random()*10)<5){
dirBolaY=-1;
127
}else{
dirBolaY=1;
}
vbola=document.getElementById("bola");
posBolaX=470;
posBolaY=240;
vbola.style.top=posBolaY+"px";
vbola.style.left=posBolaX+"px";
}
function inijog(){
vjog1=document.getElementById("jog1");
posJ1x=20;
posJ1y=180;
vjog1.style.top=posJ1y+"px";
vjog1.style.left=posJ1x+"px";
vjog2=document.getElementById("jog2");
posJ2x=920;
posJ2y=180;
vjog2.style.top=posJ2y+"px";
vjog2.style.left=posJ2x+"px";
}
function teclaDw(){
var tecla = event.keyCode;
if(tecla==38){
//Cima
dirJy=-1;
}else if(tecla==40){
//baixo
dirJy=+1;
}
}
function teclaUp(){
var tecla = event.keyCode;
if(tecla==38){
//Cima
dirJy=0;
}else if(tecla==40){
//baixo
dirJy=0;
}
}
function colisao(){
//Colisão com o jog1
if(
(posBolaX <= posJ1x+20)&&
((posBolaY+20 >= posJ1y)&&(posBolaY <= posJ1y+180))
){
dirBolaX=1;
clearInterval(jogo);
if(frames > 8){
frames-=2;
}
jogo=setInterval(enterFrame,frames);
pontos+=dificuldade;
dificuldade+=1;
document.getElementById("pnPts").value=pontos;
document.getElementById("pnDif").value=dificuldade;
}
//Colisão com o jog2
if(
(posBolaX >= posJ2x-20)&&
((posBolaY+20 >= posJ2y)&&(posBolaY <= posJ2y+180))
){
dirBolaX=-1;
clearInterval(jogo);
if(frames > 8){
frames-=2;
}
jogo=setInterval(enterFrame,frames);
pontos+=dificuldade;
dificuldade+=1;
document.getElementById("pnPts").value=pontos;
document.getElementById("pnDif").value=dificuldade;
128
}
}
function controlajog(){
if(dirBolaX == -1){
posJ1y+=dirJy*10;
vjoga=document.getElementById("jog1");
document.getElementById("jog1").style.backgroundColor="#F00";
document.getElementById("jog2").style.backgroundColor="#000";
vjoga.style.top=posJ1y+"px";
if((posJ1y+180) >= campoH+40){
posJ1y+=(dirJy*10)*(-1);
}else if((posJ1y) <= 0){
posJ1y+=(dirJy*10)*(-1);
}
}else{
posJ2y+=dirJy*10;
vjoga=document.getElementById("jog2");
document.getElementById("jog1").style.backgroundColor="#000";
document.getElementById("jog2").style.backgroundColor="#F00";
vjoga.style.top=posJ2y+"px";
if((posJ2y+180) >= campoH+40){
posJ2y+=(dirJy*10)*(-1);
}else if((posJ2y) <= 0){
posJ2y+=(dirJy*10)*(-1);
}
}
}
function controlaBola(){
vbola=document.getElementById("bola");
posBolaY+=(vel*dirBolaY);
posBolaX+=(vel*dirBolaX);
vbola.style.top=posBolaY+"px";
vbola.style.left=posBolaX+"px";
if(posBolaY >= 480){
dirBolaY=-1;
}else if(posBolaY <= 0){
dirBolaY=1;
}
if((posBolaX >= 940)||(posBolaX <= 0)){
reset();
}
}
function reset(){
posBolaX=470;
posBolaY=240;
clearInterval(jogo);
document.getElementById("pnIniciar").removeAttribute("disabled");
if((Math.random()*10)<5){
dirBolaX=-1;
}else{
dirBolaX=1;
}
if((Math.random()*10)<5){
dirBolaY=-1;
}else{
dirBolaY=1;
}
vbola=document.getElementById("bola");
vbola.style.top=posBolaY+"px";
vbola.style.left=posBolaX+"px";
vjoga=document.getElementById("jog1");
posJ1x=20;
posJ1y=180;
vjoga.style.top=posJ1y+"px";
vjoga.style.left=posJ1x+"px";
vjog2=document.getElementById("jog2");
posJ2x=920;
posJ2y=180;
vjog2.style.top=posJ2y+"px";
vjog2.style.left=posJ2x+"px";
}
129
function enterFrame(){
controlaBola();
controlajog();
colisao();
}
function preparaJogo(){
document.addEventListener("keydown",teclaDw);
document.addEventListener("keyup",teclaUp);
iniBola();
inijog();
}
function iniciaJogo(){
frames=50;
pontos=0;
dificuldade=1;
document.getElementById("pnPts").value=pontos;
document.getElementById("pnDif").value=dificuldade;
jogo=setInterval(enterFrame,frames);
document.getElementById("pnIniciar").disabled="disabled";
}