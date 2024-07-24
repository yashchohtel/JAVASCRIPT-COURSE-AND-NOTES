/*

Promises in JavaScript are a way to handle asynchronous operations, providing a more elegant and manageable alternative to callbacks. A promise represents an operation that hasn't completed yet but is expected in the future. Promises can be in one of three states: pending, fulfilled, or rejected.

Key Concepts of Promises
 -Pending: The initial state, neither fulfilled nor rejected.
 -Fulfilled: The operation completed successfully.
 -Rejected: The operation failed.

-----------------------

Creating a Promise : A promise is created using the Promise constructor, which takes a function (executor) that accepts two arguments: resolve and reject.

const promise = new Promise((resolve, reject) => {
  /-/ Asynchronous operation
  let success = true; // Change this to false to simulate failure
  if (success) {
    resolve("Operation was successful");
  } else {
    reject("Operation failed");
  }
});

-----------------------

Consuming a Promise : To handle the outcome of a promise, you use the then, catch, and finally methods.

then: Handles the successful resolution of the promise.
catch: Handles errors or rejections.
finally: Executes code regardless of the promise's outcome.

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true; // Simulate success
    if (success) {
      resolve("Operation was successful");
    } else {
      reject("Operation failed");
    }
  }, 2000);
});

promise
  .then((message) => {
    console.log(message); // Output: Operation was successful
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Operation complete"); // This will always execute
  });

example :-

let ans = new Promise((res, rej) => {
  if (true) {
    return res("resolve hua tha");
  } else {
    return rej("reject hua tha");
  }
});

ans
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((reject) => {
    console.error(reject);
  });

-----------------------

Chaining Promise : Promises can be chained to handle multiple asynchronous operations in sequence. Each then returns a new promise, allowing chaining.

let myPromiseOne = new Promise(function (resolve, reject) {
  let a = 1;

  if (a === 1) {
    resolve("(1) promise is sucessfully resolved");
  } else {
    reject("(1) the promise is failed");
  }
});

let myPromiseTwo = new Promise(function (resolve, reject) {
  let a = 1;

  if (a === 1) {
    resolve("(2) promise is sucessfully resolved");
  } else {
    reject("(2) the promise is failed");
  }
});

myPromiseOne
  .then(function (resolve) {
    console.log(resolve);
    return myPromiseTwo;
  })
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((reject) => {
    console.error(reject);
  });

-----------------------

converting this code in promises

setTimeout(() => {
  console.log("1st code");

  setTimeout(() => {
    console.log("2nd code");

    setTimeout(() => {
      console.log("3rd code");

      setTimeout(() => {
        console.log("4th code");
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);

let myTimer = new Promise((resolve, reject) => {
  // first operation
  setTimeout(() => {
    resolve("1st code");
  }, 2000);
});

myTimer
  .then((resolve) => {
    console.log(resolve);

    let myTimer2 = new Promise(function (resolve, reject) {
      // second operation
      setTimeout(() => {
        resolve("2st code");
      }, 2000);
    });

    return myTimer2;
  })
  .then((resolve) => {
    console.log(resolve);

    let myTimer3 = new Promise(function (resolve, reject) {
      // third operation
      setTimeout(() => {
        resolve("3st code");
      }, 2000);
    });

    return myTimer3;
  })
  .then((resolve) => {
    console.log(resolve);

    let myTimer4 = new Promise(function (resolve, reject) {
      // fourth operation
      setTimeout(() => {
        resolve("4st code");
      }, 2000);
    });

    return myTimer4;
  })
  .then((resolve) => {
    console.log(resolve);
  });

-----------------------

Promise.all : The Promise.all() method returns a single Promise from a list of promises, when all promises fulfill.

let myPromiseOne = new Promise(function (resolve, reject) {
  let a = 1;

  if (a === 1) {
    resolve("(1st) promise is sucessfully resolved");
  } else {
    reject("(1st) the promise is failed");
  }
});

let myPromiseTwo = new Promise(function (resolve, reject) {
  let a = 1;

  if (a === 1) {
    resolve("(2nd) promise is sucessfully resolved");
  } else {
    reject("2nd) the promise is failed");
  }
});

let myPromiseThree = new Promise(function (resolve, reject) {
  let a = 1;

  if (a === 1) {
    resolve("(3rd) promise is sucessfully resolved");
  } else {
    reject("(3rd) the promise is failed");
  }
});

Promise.all([myPromiseOne, myPromiseTwo, myPromiseThree])
.then((resolve)=>{
  console.log(resolve);
}).catch(((reject)=>{
  console.error(reject);
}))

-----------------------

Promise.any : The Promise.any() method returns a single Promise from a list of promises, when any promise fulfill.

let myPromiseOne = new Promise(function (resolve, reject) {
  let a = 1;

  if (a === 1) {
    resolve("(1st) promise is sucessfully resolved");
  } else {
    reject("(1st) the promise is failed");
  }
});

let myPromiseTwo = new Promise(function (resolve, reject) {
  let a = 1;

  if (a === 1) {
    resolve("(2nd) promise is sucessfully resolved");
  } else {
    reject("2nd) the promise is failed");
  }
});

let myPromiseThree = new Promise(function (resolve, reject) {
  let a = 1;

  if (a === 1) {
    resolve("(3rd) promise is sucessfully resolved");
  } else {
    reject("(3rd) the promise is failed");
  }
});

Promise.any([myPromiseOne, myPromiseTwo, myPromiseThree])
.then((resolve)=>{
  console.log(resolve);
}).catch(((reject)=>{
  console.error(reject);
}))

-----------------------

Promises.race : The Promise.race() method returns a Promise from a list of promises, when the faster promise settles.

let myPromiseOne = new Promise(function (resolve, reject) {
  let a = 1;

  if (a === 1) {
    resolve("(1st) promise is sucessfully resolved");
  } else {
    reject("(1st) the promise is failed");
  }
});

let myPromiseTwo = new Promise(function (resolve, reject) {
  let a = 1;

  if (a === 1) {
    resolve("(2nd) promise is sucessfully resolved");
  } else {
    reject("2nd) the promise is failed");
  }
});

let myPromiseThree = new Promise(function (resolve, reject) {
  let a = 1;

  if (a === 1) {
    resolve("(3rd) promise is sucessfully resolved");
  } else {
    reject("(3rd) the promise is failed");
  }
});

Promise.race([myPromiseOne, myPromiseTwo, myPromiseThree])
.then((resolve)=>{
  console.log(resolve);
}).catch(((reject)=>{
  console.error(reject);
}))

-----------------------

Promises.finally : This will always execute whether it fails or resolve

let myPromiseOne = new Promise(function (resolve, reject) {
  let a = 1;

  if (a === 1) {
    resolve("(1st) promise is sucessfully resolved");
  } else {
    reject("(1st) the promise is failed");
  }
});

myPromiseOne.then((resolve)=>{
  console.log(resolve);
}).catch(((reject)=>{
  console.error(reject);
})).finally(()=>{

})

-----------------------

Promises.allSettled() : The Promise.allSettled() method returns a single Promise from a list of promises, when all promises sette.

let myPromiseOne = new Promise(function (resolve, reject) {
  let a = 1;

  if (a === 1) {
    resolve("(1st) promise is sucessfully resolved");
  } else {
    reject("(1st) the promise is failed");
  }
});

let myPromiseTwo = new Promise(function (resolve, reject) {
  let a = 1;

  if (a === 1) {
    resolve("(2nd) promise is sucessfully resolved");
  } else {
    reject("2nd) the promise is failed");
  }
});

let myPromiseThree = new Promise(function (resolve, reject) {
  let a = 1;

  if (a === 1) {
    resolve("(3rd) promise is sucessfully resolved");
  } else {
    reject("(3rd) the promise is failed");
  }
});

Promise.allSettled([myPromiseOne, myPromiseTwo, myPromiseThree])
.then((resolve)=>{
  console.log(resolve);
}).catch(((reject)=>{
  console.error(reject);
}))

*/

