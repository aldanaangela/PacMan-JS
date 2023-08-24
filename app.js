import { gameLevels } from "./js/levels.js"; 
import { setScreenObj, setGameLevel, drawScreen, drawLevel, movePacman} from "./js/screen.js";

let currentLevel = 0;
let sObj = {
     height: 500,
     width: 600,
     backgroundColor: "black",
     canvasId: "canvas1",
     dimension: 25
 }  
 
 class Juego {
      constructor() {
     setScreenObj(sObj);
      drawScreen();
     setGameLevel([...gameLevels[currentLevel]]);
     drawLevel();
      }
      play = () => {
           inGame = [...gameLevel[currentLevel]];
           setGameLevel(inGameLevel1);
           pacPos = getPos(inGameLevel, 5);

           document.addEventListener("keydown", (e) => {
               pacPos = movePacman(e,key, pacPos);
           });
      };
 }
 
 let PacmanJuego = new Juego();
 PacmanJuego.play();





