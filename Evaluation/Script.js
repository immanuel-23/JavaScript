const product=[
    {name:"parle-G",price:10},
    {name:"Jeans",price:400},
    {name:"Smart Watch",price:3000},
    {name:"Bat",price:800},
    {name:"Sky-Bags",price:700},
    {name:"Chips",price:20},
    {name:"LapTop",price:20000},
    {name:"FitnesBand",price:1999},
    {name:"Pencil",price:10},
    {name:"Books",price:100},
]


let select = document.querySelector("select");
let textarea=document.getElementsByTagName("h2");
const table = document.querySelector("table")


for(let i=0;i<product.length;i++){
    let option = document.createElement("option")
    option.innerText = product[i].name;
    option.setAttribute("name",product[i].name)
    option.setAttribute("value",product[i].price);
    option.setAttribute("id",i+1);
    select.append(option);
}

select.addEventListener('change',()=>{
    document.getElementById('text').innerHTML = `${select.value}`;

})
var finalcart=[];
var productPrice;
var productQuantity;
var productName;
var total=0;
//const plus = document.querySelector(".plus"),
var  a = productQuantity;
var totalPrice=document.getElementById("totalPrice")
var id=0;


function passValues() {

    productPrice=document.getElementById('product').value
    productQuantity=document.getElementById('quantity').value
    for(i=0;i<product.length;i++){
        if(productPrice==product[i].price){
            productName=product[i].name;
        }
    }
    let html=`<button id =${id} value="click" onclick="deleteRow(this)"><i class="fa-solid fa-trash"></i><button>`


    var contains=JSON.stringify(finalcart);

    if(contains.includes(productName)){
      alert("Item already exist in Cart")
    }else{
      table.innerHTML +=`<tr> <td>${productName}</td> <td class="quantity"> <div class="wrapper">
      <div id="minus" class="minus">-</div>
      <div id="num" class="num">${productQuantity}</div>
      <div id="plus" class="plus" value="click" onclick="increment(this)">+</div>
    </div></td> <td  id= ${id} class="price"> ${productPrice} </td> <td id="subtotal"> ${productPrice*productQuantity} </td> <td> ${html} </td> `
    finalcart.push( { pid:`${id}`,price:`${productPrice}`,quantity:`${productQuantity}`,pname:`${productName}`, subTotal:`${parseInt(productPrice*productQuantity)}`})
    id=id+1
      calculateToatlCart();
    }
    
    
 
}

    
   
var  num = parseInt(document.getElementById("num"))
  var value=parseInt(productQuantity);
  const plus = document.getElementById("plus")


function increment(plusbtn){
  var parent=plusbtn.parentNode;
 const nodel=parent.childNodes.id('num')
console.log(nodel);//  nodel.map(element=>{
//   element.querySelector('num')
//  })

}


function deleteRow(o) {

    var p=o.parentNode.parentNode;
    var deleteItemId=parseInt(o.id)
    finalcart.pop(deleteItemId)
    p.parentNode.removeChild(p);// reference from stack over flow;  

    calculateToatlCart()
}
function calculateToatlCart() {
  var total=0;
  finalcart.forEach(element => {
    total=parseInt(element.subTotal)+total;
  });
  totalPrice.innerText=`Total Cart Price is : ${total}`
}
   
// function displayCart(){


//     cart.forEach(element=>{

//         table.innerHTML +=`<tr> <td>${productName}</td> <td> ${element.quantity}</td><td> ${element.price} </td>`
//     })
// }
// displayCart();


 

// const option=document.querySelector("select");
// const options=document.getElementsByTagName("option")
// console.log(options);
// let html=``;
// product.forEach(element => {
// html=`${element.name}`
// options.innerText=html;

// });

// const options=document.querySelector("select")
// const price= document.getElementsByTagName("textarea")
// console.log(price);
// let html=``;
// product.forEach(element => {

//     console.log(element.name);

//     options.innerHTML=`<option>${element.name}<option>`;

    
// });