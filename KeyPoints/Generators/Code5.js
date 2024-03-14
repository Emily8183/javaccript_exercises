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

// 以上*生成器函数允许以一种方便的方式来定义迭代器，允许在迭代的过程中暂停和恢复执行。如果不加*，手动实现的话：
// let obj = {
//   start: 10,
//   end: 20,

//   [Symbol.iterator]() {
//     let cnt = this.start;
//     return {
//       next: () => {
//         if (cnt <= this.end) {
//           return { value: cnt++, done: false };
//         } else {
//           return { done: true };
//         }
//       }
//     };
//   },
// };

// for (let num of obj) {
//   console.log(num);
// }
