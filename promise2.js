const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState == 4 && request.status == 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
        // console.log(request.responseText);
      } else if (request.readyState == 4) {
        // console.log("could not fetch data...");
        reject("data coudnt not be fetched....");
      }
    });
    // request.open("GET", "https://jsonplaceholder.typicode.com/todos/")
    request.open("GET", resource);
    request.send();
  });
};
// getTodos("journals.json").then((data)=>{
//     console.log(data);
// }).catch((err=>{
//     console.log(err );
// }))

// chaining promises

getTodos("journal.json")
  .then((data) => {
    console.log(data);
    getTodos("books.json")
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    getTodos("journal.json")
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });

  getTodos("books.json").then((data)=>{
    return getTodos("journal.json");
}).then((data)=>{
    console.log(data);
    return getTodos("books.json");
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});