let canvas ;
let context;
let sObj = {};
let x = 0,                                              
    y = 0;
let level = [];


let setScreenObj = (screenObj) => {
     sObj = screenObj;
} ;

let drawScreen = () =>{
    canvas = document.getElementById(sObj.canvasId);
    canvas.height = sObj.height;
    canvas.width = sObj.width;
    context = canvas.getContext("2d");
    context.fillStyle = sObj.backgroundColor;
    context.fillRect(0,0,sObj.width, sObj.height)
};

let drawLevel = (gLevels, cLevel) => {
    let x = 0, y=0;
    let level = gLevels[cLevel];
    for (const yElement of level){
    for(const xElement of yElement){
    if (xElement == 1){ //1 = pared
        context.fillStyle = "blue"; 
        context.fillRect(x,y,sObj.dimension,sObj.dimension);
          }else if (xElement == 4){
            // 4 = comida
        context.beginPath();
        context.fillStyle = "#FEFF9F";
        context.arc(
          x + sObj.dimension / 2,
          y + sObj.dimension / 2,
          sObj.dimension / 8, 
          0,
          Math.PI * 2,
          true
         );
        context.closePath();
        context.fill();
          } else if( xElement == 3){
            //super comida / super Pill
        context.beginPath();
        context.fillStyle = "green";
        context.arc(
          x + sObj.dimension / 2,
          y + sObj.dimension / 2,
          sObj.dimension / 4, 
          0,
          Math.PI * 2,
          true
         );
        context.closePath();
        context.fill();
        }else if (xElement == 5){
        //pacman
        context.beginPath();
        context.fillStyle = "yellow"
        context.arc(
          x + sObj.dimension / 2,
          y + sObj.dimension / 2,
          sObj.dimension /2, 
          Math.PI * 0.15,
          Math.PI * 1.85,
          false
         );
        context.lineTo(x+sObj.dimension/2,y+sObj.dimension/2)
        context.closePath();
        context.fill();
        }else if (xElement == 2 ){ 
        context.beginPath();
        context.fillStyle = "#6A2CE3";
          }
        //Math.PI*0.15, Math.PI * 1.85, false
        x = x + sObj.dimension;
        }
   y = y + sObj.dimension;
   x = 0;
    }
    };

let movePacman = (dir, pos) =>{
  let arrowPosX = 0,
      arrowPosY =0;
  let nextPos =0,
      prevPos =0;

      if (dir === "ArrowLeft"){
        arrowPosY = pos[1];
        arrowPosX = pos[0]-1;
        nexPos = level [arrowPosY][arrowPosX];
      }
if ([0, 3, 4, 6].includes(nextPos)){
  level [pos[1]][pos[0]] = 0;  //level [y][x]- ya me lo comí
  level [arrowPosY][arrowPosX] = 5;  //pacman se movió
  pos = [arrowPosX, arrowPosY];
  drawPacman(dir, pos);
}
return pos;
};

let drawPacman = (dir, pos) => {
let  X = pos[0] = sObj.dimension;
let  Y = pos[1] = sObj.dimension;

cleartReact();
 
if (dir === "ArrowLeft"){
  context.beginPath();
  context.fillStyle = "yellow";
  context.arc(
    x + sObj.dimension / 2,
    y + sObj.dimension /2,
    sObj.dimension / 2.8,
    Math.PI *0.75,
    Math.PI *1.25,
    true
  );
  context.lineTo(x + sObj.dimension /2, y + sObj.dimension /2 );
  context.closePath();
  context.fill ();
  }
};

let clearRect = (dir, pos) => {
  let cRX = pos[0];
      cRY = pos[1];
      context.fillStyle = sObj.backgroundColor;
      context.fillRect(
        pos[0] * sObj.dimension,
        pos[1] * sObj.dimension,
      );
  if (dir === "ArrowLeft") {
    cRX++;
  }
  context.fillRect(
    cRX + sObj.dimension,
    cRY + sObj.dimension,
    sObj.dimension,
    sObj.dimension 
  );
};

export { setScreenObj, setGameLevel, drawScreen, drawLevel, movePacman} from "./js/screen.js";