function getClosestToZero(){
    let closest = arguments[0];
    for(let i = 1; i < arguments.length;i++){
            if(Math.abs(closest) > Math.abs(arguments[i])){
                closest = arguments[i];
            }  
        }
        return closest; 
    }