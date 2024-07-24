/*

SYNCHRONOUS JS

Synchronous JavaScript refers to the way in which JavaScript code is executed in a sequential, blocking manner. This means each line of code is executed one after the other, and the execution of the next line waits for the current one to complete. This blocking behavior can lead to performance issues, especially when dealing with time-consuming tasks such as network requests, file I/O, or intensive computations.

Characteristics of Synchronous JavaScript
Blocking Execution: Each operation must complete before the next one starts. This can lead to delays if a particular operation takes a long time.
Sequential Processing: Code is executed in the order it appears. This ensures predictability and simplicity but can be inefficient for certain tasks.
Single-Threaded: JavaScript runs on a single thread, which means only one operation can be performed at a time.

example :-

console.log('Start');

function longRunningTask() {
  const end = Date.now() + 3000; // 3 seconds later // Simulating a long-running task
  while (Date.now() < end) {
  }  // Blocking loop
  console.log('Task Completed');
}

longRunningTask();
console.log('End');

------------------

ASYNCHRONOUS JS

To address the limitations of synchronous execution, JavaScript provides asynchronous mechanisms such as callbacks, promises, and async/await.

callBack :-

console.log('Start');

function longRunningTask(callback) {
  setTimeout(() => {
    console.log('Task Completed');
    callback();
  }, 3000);
}

longRunningTask(() => {
  console.log('End');
});

------------------

*/ 

