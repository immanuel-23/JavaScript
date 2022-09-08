const getTodos = async () => {
  const resposne=await fetch("books.json")
  const data=await resposne.json();
 return data;


};
const test = getTodos("books.json").then((data)=>{
    console.log(data);
});
console.log(test);
