function findTriangleParams(){
    let sideA = prompt('Enter the length of side "a"', '0');
    let sideB = prompt('Enter the length of side "b"', '0');
    let angle = prompt('Enter the angle between the sides','0');
    
    sideA = Math.trunc(sideA*100) / 100;
    sideB = Math.trunc(sideB*100) / 100;
    
    const OPENED_ANGLE = 180;
    let rad = Math.PI/OPENED_ANGLE*angle;
    
    let sideC = Math.sqrt(Math.pow(sideA,2)+Math.pow(sideB,2)-2*sideA*sideB*Math.abs(Math.cos(rad)));
    
    let perimeter = sideA+sideB+sideC;
    
    const chek = 0.5;
    
    let square = chek*sideA*sideB*Math.sin(rad);
    
    console.log(sideA>0 && sideB>0 && angle>0 ? `c length: ${+sideC.toFixed(2)} 
Triangle square: ${+square.toFixed(2)}
Triangle perimeter: ${+perimeter.toFixed(2)}
` : `Invalid data`);
}

findTriangleParams();