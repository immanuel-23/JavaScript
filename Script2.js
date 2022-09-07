// const scores=[20,30,35,56,60,90];
// // filter demo
// const filteredScore=scores.filter(score=>{
//     return score>=30;
// })

// console.log(filteredScore);

// const users=[
//     {name:"Jayesh",subscribed:true},
//     {name:"Manish",subscribed:false},
//     {name:"Vijay",subscribed:false},
//     {name:"Krishna",subscribed:true},
// ];

// const subscribedusers=users.filter(user=>{
//     return user.subscribed==true;
// })

// console.log(subscribedusers);

// const prices=[100,200,300,400,500];
// // map
// const discountPrice=prices.map(prices=>{
//     return prices-prices*0.3;
// })
// console.log(prices)

// console.log(discountPrice);

// const products=[
//     {name:"Parle-g",price:10},
//     {name:"Frooti",price:100},
//     {name:"Maggi",price:20},
//     {name:"Pasta",price:40}
// ];

// const discountProduct=products.map(product=>{
//     if(product.price>25){
//         //product.price=product.price-product.price*0.3;
//         return {name:product.name,price:product.price-product.price*0.3};
//     }
//     return product
// })

// console.log(discountProduct)
// console.log(products);

// // reduce
// const ages=[10,20,18,19,20];

// const result=ages.reduce((age,sum)=>{

//     console.log(sum,age)
//     return sum=sum+age;

// })

// //console.log(result)

// const productCats=[
//     {category:"groceries",name:"Parle-g",price:10},
//     {category:"groceries",name:"Frooti",price:12},
//     {category:"electronics",name:"boat headphone",price:20},
//     {category:"groceries",name:"Pasta",price:40}
// ];

//  const totalCost1=productCats.reduce((sum,productCat)=>{
//     sum=sum+productCat.price;
//      return sum ;
//  },0)
 
// const totalCost = productCats.reduce((total,productCat)=>total+productCat.price,0)

// console.log(totalCost1);
// console.log(totalCost);




// const score1=[109,11,155,0,110,43,50];

// // differenct between filter and find is
// // filter will return list 
// // but find will return first element that satisfy the condition


// // find method
// const scoreGreaterThen30=score1.find((n)=>{
//         return n>30;
    
// })

// console.log(scoreGreaterThen30);

// // sort method in js is destrective because it changes the main array

// const student=["Immanuel","Israel","Ajay","Shivam","Rahul"]

// const newstudent=student.map(n=>n.toUpperCase).sort();

// console.log(newstudent)



// score1=score1.sort(a,b=>{
//     return a-b;
// });
// console.log(score1);

// let players=[
//     {name:"finch",score:50},
//     {name:"Surya",score:60},
//     {name:"Virat",score:50},
//     {name:"Dhoni",score:65}
// ]

// players.score=players.map(n=>n.score).sort();
// console.log(players);

// players.name=players.map(n=>n.name).sort();
// console.log(players);


// players.sort((a,b)=>{
//     return a.name.localeCompare-b.name.localeCompare;
// })

// console.log(players);





// const products=[
//     {name:"tshirt",price:500},
//     {name:"chinos",price:1200},
//     {name:"jeans",price:1100},
//     {name:"shirt",price:800},
//     {name:"Jacket",price:2500}
// ];

// const discountedProduct=products.filter(n=>{
//     if(n.price>500){
//         n.price=n.price-n.price*0.3;
//         return n.price;
//     }
// })


// console.log(discountedProduct);

// //  discountedProduct=products.sort(n=>{
// //     if(n.price>500){
// //         n.price=n.price-n.price*0.3;
// //         return n.price;
// //     }
// // })







