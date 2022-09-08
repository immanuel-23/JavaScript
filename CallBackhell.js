const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState == 4 && request.status == 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
      // console.log(request.responseText);
    } else if (request.readyState == 4) {
      // console.log("could not fetch data...");
      callback("could not fetch data...", undefined);
    }
  });
  // request.open("GET", "https://jsonplaceholder.typicode.com/todos/")
  request.open("GET", resource);
  request.send();
};

getTodos("books.json", (err, data) => {
  console.log(data);
  getTodos("journal.json", (err, data) => {
    console.log(data);
    getTodos("books.json", (err, data) => {
      console.log(data);
      getTodos("journal.json", (err, data) => {
        console.log(data);
      });
    });
  });
});
