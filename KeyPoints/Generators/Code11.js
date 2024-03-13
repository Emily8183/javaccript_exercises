function* gen(){
    let a = yield "First";
    console.log(a);
    a = yield "Second" 
    console.log(a);    
}
const gObj = gen();
gObj.next("A");
gObj.next("B");
gObj.next("C");