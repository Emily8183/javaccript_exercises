//apply iterator function on an object

//1
console.log("1");

let obj1 = {
  start: 10,
  end: 15,
};
//make an object iterable by using Symbol.iterator
obj1[Symbol.iterator] = function () {
  return {
    next() {
      if (obj1.start <= obj1.end) {
        return { value: obj1.start++, done: false };
      } else {
        return { done: true };
      }
    },
  };
};

for (let i of obj1) {
  console.log(i);
}

//2 iterator and iterable must are the same object
console.log("2");

let obj2 = {
  a: 10,
  b: 20,
  [Symbol.iterator]() {
    //must return the object itself otherwise there wont be any reference
    return this;
  },
  //iterable method
  next() {
    if (obj2.a < obj2.b) {
      return { value: obj2.a++, done: false };
    } else {
      return { done: true };
    }
  },
};
for (let i of obj2) {
  console.log(i);
}

//3 the next method inside of the method of [Symbol.iterator]
console.log("3");

let obj3 = {
  a: 10,
  b: 20,
  [Symbol.iterator]() {
    return {
      next() {
        if (obj3.a < obj3.b) {
          return { value: obj3.a++, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};
for (let i of obj3) {
  console.log(i);
}
