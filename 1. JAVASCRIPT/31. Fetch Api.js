/*

What is an API :-  An API, or Application Programming Interface, is a set of rules and definitions that allows different software applications to communicate with each other. It defines the methods and data structures that developers can use to interact with the functionality provided by an application, service, or library.

Key Concepts of API
- Endpoints: Specific URLs provided by the API where requests can be made.
- Methods/Verbs: HTTP methods like GET, POST, PUT, DELETE that specify the type of operation to be performed.
- Requests: Messages sent to the API to perform operations or retrieve data.
- Responses: Data returned by the API after processing the request.
- Authentication: Mechanisms to secure access to the API, ensuring only authorized users can interact with it.
- Rate Limiting: Restrictions on the number of requests a client can make in a certain period to prevent abuse.

----------------------

FETCH API :-

fetch("https://jsonplaceholder.typicode.com/users").then((responses)=>{
   return responses.json();
}).then((responses)=>{
    console.log(responses);
})

FETCHING API WITH ASYNC AWAIT :-

example 1 :-
async function fetching() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let convertedResponse = await response.json();
  console.log(convertedResponse);
}
fetching();


example 2 :-

async function fetching(){
    let response = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
    let conResponse = await response.json();
    console.log(conResponse.data[1]);
}

fetching();

example 3 :-

async function fetching(){
    let response = await fetch("https://catfact.ninja/fact");
    let conResponse = await response.json();
    console.log(conResponse.fact);
}

fetching();

*/

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
