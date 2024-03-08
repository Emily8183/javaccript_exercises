const PriceCalc=(price)=>{
    return (dPer)=>{
        return price*dPer;
    }
}
//getPrice();
const discountAmount = PriceCalc(300);
console.log(discountAmount(0.3));
console.log(discountAmount(0.5));
console.log(discountAmount(0.10));