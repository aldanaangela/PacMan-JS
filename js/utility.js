
 let getPos = (level, toSearch) =>{
    let position = []; //0 - X , 1 - Y
    undit = false;
    
    level.forEach((Element,index1) => {
        if (!foundIt){
            position[0] = element.findIndex(
                (value, index2) => (foundIt = value === toSearch)
            );
            position[1] = position[0] != null ? index1 : null;
        }
    });

    return position;
 };

 let blockScrollPage = () => {
    window.addEventListener(
         "keydown",
         (e) => {
            if(
            [ 
                "space",
                "ArrowUp",
                "ArrowDown",
                "ArroLeft",
                "ArrowRight",
            ].indexOf(e.key) > -1
            ) {
                e.preventDefault();
            }
         },
         false
    );
 };