function* gen(){
    console.log("Hi");

}
function* gen1(){
     const g = gen();
     g.next();
}
const g1 = gen1();
g1.next();