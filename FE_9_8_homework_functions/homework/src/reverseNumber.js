function reverseNumbers(num){
    if(num>0){
        let reverse = num.toString().split('').reverse().join('');
        return +reverse;
    }else{
        let subZero = Math.abs(num);
        let reverseSub = subZero.toString().split('').reverse().join('');
        return -reverseSub;
    } 
}
