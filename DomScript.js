console.log("Dom maipulation");

// const par=document.querySelector("p");
// console.log(par);
// par.innerText="updated  to upper "

// tryong to change all p tags

// const paras=document.querySelectorAll("p");
// console.log(paras);

// paras.forEach(n=>{
//     n.innerText="Updated paragraph ";
    
// })

// const errParas=document.querySelector(".error");
// console.log(errParas.innerText);
// errParas.innerText="Error p tag"

// get elemnt by id , class and tag name;

// const welcome=document.getElementById("Welcome")
// console.log(welcome);

// const errorPara=document.getElementById("error");
// console.log(errorPara);

// const newCoontent=document.querySelector(".content");
//  newCoontent.innerHTML="<h1>My content is here</h1>"

// const players =["Immanuel","Dhoni","Virat","Rahul"]

// const newCoontent=document.querySelector("p");
// players.forEach(players=>{
//     newCoontent.innerHTML+=`<p>${players}</p>  `
// })

// this is widley used in company 
// const studentDetails=[
//     {name:"Immanuel",id:101,cource:"BE-IT",gradYear:2022},
//     {name:"Tanmay",id:102,cource:"BE-IT",gradYear:2023},
//     {name:"Rahul",id:103,cource:"BE-CS",gradYear:2012},
//     {name:"Swapnil",id:104,cource:"BE-CS",gradYear:2002},
// ]

// const details=document.querySelector(".name");
// studentDetails.forEach(student=>{
//     details.innerHTML= student.name
// })

// const table = document.querySelector("table")
// studentDetails.forEach(student=>{
//     table.innerHTML +=`<tr><td>${student.name}</td><td>${student.id}</td><td>${student.cource}</td><td>${student.gradYear}</td></tr>`
// })

// getting and setting tag attributes

// console.log(document.querySelector("a"))
// const link=document.querySelector("a");

// link.setAttribute("href","https://instagram.com")
// link.innerText="Link to instagram"

// const para=document.querySelector("p");
// para.setAttribute("class","sucess")

// const para =document.querySelector("p");
// //para.classList.replace("error","success")

// // para.classList.toggle("error")
// // para.classList.toggle("error")

// //parent ,child,sibling

// const article=document.querySelector("article")
// console.log(article);
// //article.setAttribute("class","success")

// const childrens=article.children
// //  for(var i=0;i<childrens.length;i++){
//     if(childrens[i].localName=="p"){
//         childrens[i].classList.add("error") 
//    }
//    if(childrens[i].localName=="h2"){
//     childrens[i].classList.add("error") 
//     }
//     if(childrens[i].localName=="h1"){
//         childrens[i].classList.add("success")
//     }
//  }



// Array.from(childrens).forEach(child=>{
//     if(child.localName=="p"){
//         child.classList.add("error")
//     }
//     if(child.localName=="h1" || child.localName=="h2"){
//         child.classList.add("success")
//     }
// })

// we can access parent through child element
// const head2=document.querySelector("h1")
// console.log(head2.previousSibling);
// console.log(head2.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);


// // events in js


const h1=document.querySelector("h1");
const input=document.querySelector("input")

const button=document.querySelector("button")

button.addEventListener('click',e=>{
s
    if(h1.innerText=="Events demo"){
        h1.innerHTML="hii this is me"
    }
})
var todolist=[];
button.addEventListener('click',e=>{
    var i=0
    h1.innerText=input.value
    todolist.push(input.value)
    i++;
    console.log(todolist.length);


})
 const ul=document.querySelector("ul");
 const li=document.querySelectorAll("li");
 console.log(li);


//  console.log(ul);
// let html=``;

 button.addEventListener('click',e=>{
    
    ul.append(input.value)
 })


// li.forEach(element=>{
//     li.innerText=todolist.forEach(list=>{
//         return list;
//     })
// })

// event bubling(events are propogated from child to parent elements)

ul.addEventListener('click',e=>{
    e.target.remove();
})




