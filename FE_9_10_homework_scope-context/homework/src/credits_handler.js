function userCard (cardKey){
    let balance = 100;
    let transactionLimit = 100;
    const historyLogs = [];
    const key = cardKey;
    
    let getCardOptions = () => {
        return {
            balance: balance,
            transactionLimit: transactionLimit,
            historyLogs: historyLogs,
            key: key
        }
    }

    let logs = (type, credits) => {
        let log = {
            operationType: type,
            credits: credits,
            operationTime: new Date().toLocaleString('en-GB')
        };
        historyLogs.push(log);
    }

    let putCredits = (amount) => { 
        balance += amount
        logs('Recieved credits', amount);
    }

    let takeCredits = (amount) => {
        if(balance >= amount && transactionLimit >= amount){
            balance -= amount;
            logs('Withdrawal of credits', amount);
        }else{
            console.log('You cant do this operation')
        }
    }

    let setTransactionLimit = (limit) => { 
        transactionLimit = limit 
        logs('Transaction limit change', limit);
    }

    let transferCredits = (amount, card) => {
        if(balance >= amount && transactionLimit >= amount){   
            const percent = 0.5;
            const hundred = 100;
            let taxe = amount * percent / hundred;
            let taxedAmount = amount - taxe;
            takeCredits(amount);
            card.putCredits(taxedAmount);
        }else{
            console.log('You cant do this operation')
        }
    }


    return {
        getCardOptions: getCardOptions,
        logs: logs,
        putCredits: putCredits,
        takeCredits: takeCredits,
        setTransactionLimit: setTransactionLimit,
        transferCredits: transferCredits
    }
}


class UserAccount {
    constructor(name){
        this.name = name;
        this.cards = [];
    }

    addCard(){
        const maxCards = 3;
        if(this.cards.length < maxCards){
            this.cards.push(userCard(this.cards.length + 1))
        }else{
            console.log('You have reached maximum quantity of cards');
        }
    }

    getCardByKey(key){
        return this.cards[key - 1];
    }
}
