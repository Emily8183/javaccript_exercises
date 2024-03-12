let a=8;
let ageErr = new Error("Invalid Age");
try{
    if(a<18){
        throw ageErr;
    }else{
        console.log("Valid age");
    }
}catch(err){
    console.log(err.message);
}