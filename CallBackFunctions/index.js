// // call backfunction
 console.log("call back demo");

// const myFunc=function(callBack){
//     let value=10;
//     console.log(value);
//     console.log(callBack);
// }

// const demoFunc=function(val){
//     console.log(val+1);
// }

// myFunc(demoFunc);
function x(y) {
    console.log("from x");
    y();
}
x(function y() {
    console.log("from y");
}
)





// forEach

// const players=["Immanuel","Dhoni","Virat","Rahul"];

// for(var i =0;i<players.length;i++){
//     console.log(players[i]);
// }

// // for each

// players.forEach(element => {
//     console.log(element)
// });



// players.forEach((element,index) => {
//     //console.log("hello")
//     console.log(element,index)
// });



// const ul =document.querySelector(".player");
// let html=``;

// players.forEach((player)=> {
//     html+=`<li>${player}<Li>`;
// });

// ul.innerHTML=html;

// object literal

// let players={
//     name:"Immanuel",
//     age:22,
//     matches:200,
//     tweets:["Hello Good Morning","India Won !","IPL is on the way"],
//     runs:200000,
//     wickets:190,
//     score:function(){
//         console.log("Highest run is "+ this.runs);
//     },
//     printMatches:function(){
//         console.log('Total matches '+this.matches);
//         //console.log(this);
//     },
//     allTweets:function(){
//         this.tweets.forEach(element => {
//             console.log(element)
//         });
//     }
// }
// console.log(players);
// console.log(players.name,players.age);
// console.log(players.tweets[2]);
// players.score();
// players.printMatches();
// players.allTweets();

// console.log(players.score);
// console.log(players.matches);
// console.log(players.allTweets);

