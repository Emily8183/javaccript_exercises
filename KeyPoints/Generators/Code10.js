function* gen(){
    try{
        yield "One";
        yield "Two";
    }catch(err){
       console.log("Error:"+ err);
    }
}
const gObj = gen();
console.log(gObj.next());
console.log(gObj.throw());