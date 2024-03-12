let a=8;
let ageErr = new Error();
try{
    if(a<18){
        throw ageErr;
    }else{
        console.log("Valid age");
    }
}catch(err){
    console.log("Invalid age error");
}