console.log("local storage");
localStorage.setItem("Name1","Immanuel")
localStorage.setItem("Name2","rahul")
localStorage.setItem("Name3","rohit")
localStorage.setItem("Name4","Ashish")

//const Name1=localStorage.getItem("Name1");
//console.log(Name1);

console.log(localStorage);

//console.log(localStorage.clear());

console.log(typeof(localStorage));
//local storage cant stored password
//localStorage doesnot get delete like cookies or session   (local storage cant get deleted it self)
// fetching data from local storage is faster then network call

console.log(localStorage.length);

// converting object to string
let local=JSON.stringify(localStorage);
console.log(local);
console.log(typeof(local));

console.log("Session storage");
sessionStorage.setItem("Name1","Immanuel")
sessionStorage.setItem("Name2","rahul")
sessionStorage.setItem("Name3","rohit")
sessionStorage.setItem("Name4","Ashish")

console.log(sessionStorage);



