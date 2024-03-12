function* gen(){
    try{
        yield "One";
        yield "Two";
    }finally{
       yield "Finally";
    }
}
const gObj = gen();
console.log(gObj.next());
console.log(gObj.return());