const magicNumbers = {
    one: 1,
    five: 5,
    ten: 10
}

let maxNum = 5;
let totalPrize = 0;
let possiblePrize = 10;
let atempts = 3;
let getRandomNumber = (a,b) => Math.floor(Math.random() * (a - 0 + b)) + 0;
let start = confirm('Do you want to play a game?');

if(start){
    becomeAMillionaire();
}else{
    alert('You did not become a millionaire, but can ...')
}

function becomeAMillionaire(){
        let randomNumber = getRandomNumber(maxNum,magicNumbers.one);
        let currentPossiblePrize = possiblePrize;
        while(atempts > 0){
            let userNumber = +prompt(`Enter a number from 0 to ${maxNum}
Atempts left: ${atempts}
Total prize: ${totalPrize}
Possible prize on current attempt: ${currentPossiblePrize}`);
            atempts--;
            if(atempts === 0){
                alert(`Thank you for a game. Your prize is: ${totalPrize}`)
                let again = confirm('Do you want to play again ?');
                if(again){
                    maxNum = magicNumbers.five;
                    possiblePrize = magicNumbers.ten;
                    totalPrize = 0;
                    atempts = 3;
                    becomeAMillionaire();
                }else{
                    alert('Thank you. Bye !');
                    break;
                }
            }else if(userNumber === randomNumber){
                totalPrize += currentPossiblePrize ;
                alert(`Congratulations your prize is ${totalPrize}`) ;
                let continueTheGame = confirm(`Congratulations your prize is ${totalPrize}. Do you want to continue ?`);
                if(continueTheGame){
                    atempts = 3;
                    maxNum = maxNum * 2;
                    possiblePrize = possiblePrize * 3;
                    becomeAMillionaire();
                }else{
                    alert(`Thank you for a game. Your prize is: ${totalPrize}`)
                    let againToo = confirm('Do you want to play again ?');
                    if(againToo){
                        maxNum = magicNumbers.five;
                        possiblePrize = magicNumbers.ten;
                        totalPrize = 0;
                        atempts = 3;
                        becomeAMillionaire();
                    }else{
                        break;
                    }
                }
            }else{
                currentPossiblePrize = Math.floor(currentPossiblePrize / 2);
            }
        }
    }








