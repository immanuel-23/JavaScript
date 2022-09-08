// js inbuilt api -fetch appi
// internall fetch api implements promise
// fetch returns a promise, promise is resolved  on sucess  and rejected  on failure

fetch("books.json")
  .then((response) => {
    console.log("resolved",response);
    console.log(response.json());
  })
  .then((data) => {
    console.log(data);
    return fetch("journal.json")
  })
  .then((data) => {
    console.log(data);
    return fetch("books.json")
  })
  .then((data) => {
    console.log(data);
    return fetch("journal.json")
  })
  .catch((err) => {
    console.log("error", err);
  });
