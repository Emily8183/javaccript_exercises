let arr=[2,4,6,8];
let result = arr.reduce((accumulator,current)=>{
    return accumulator*current;
});
console.log(result);