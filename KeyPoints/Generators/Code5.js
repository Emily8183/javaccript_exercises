let obj = {
  start: 10,
  end: 20,

  *[Symbol.iterator]() {
    //也可以写成 [Symbol.iterator]:function*()
    for (let cnt = this.start; cnt <= this.end; cnt++) {
      yield cnt;
    }
  },
};
// for(let i of obj){
//   console.log(i);
// }

console.log([...obj]); //these code takes place of the above line 12-14
