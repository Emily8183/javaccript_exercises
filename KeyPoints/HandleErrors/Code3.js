try{
    let a=10;
    console.log(`Value of A${a}`);
    letb=50;
    console.log(`Value of B${b}`);
}catch(err){
    console.log("Error Found");
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
}