function* gen(){
    console.log("Hi");

}
function* gen1(){
    yield* gen();    
}
const g1 = gen1();
g1.next();