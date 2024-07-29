fetch("https://jsonplaceholder.typicode.com/users")
  .then((responses) => {
    return responses.json();
  })
  .then((responses) => {
    console.log(responses);
  });
