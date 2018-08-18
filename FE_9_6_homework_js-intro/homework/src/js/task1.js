
function findOutThePrice(){
    let amount = prompt('Enter the amount');
    let discount = prompt('Enter the discount');
    
    amount = Math.trunc(amount * 100) / 100;
    let saved = amount * discount / 100;
    let priceWithDiscount = amount - saved;
    
    return amount>=0 && discount>=0 && discount<=100 ? `Price without discount: ${amount} 
            Discount: ${discount}%
            Price with discount: ${+priceWithDiscount.toFixed(2)}
            Saved:  ${+saved.toFixed(2)}`:`Invalid data` ;
}

console.log(findOutThePrice());

