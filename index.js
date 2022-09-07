console.log(20);

var age=32;
console.log(age);

console.log(typeof age);


age="name";

console.log(typeof age);

const rate=10;
// rate=9;
// console.log(rate)

let name="immanuel";


let email="immanuel.gnanadurai@aurionpro.com";

console.log(email.indexOf("@"));
console.log(email.substring(email.indexOf("@")));
let name1=email.slice(0,email.indexOf("."));
let name2=email.slice(email.indexOf("g"),email.length);
console.log(name1);
console.log(name2)
console.log(email.length);


const title="Proramming in Java";
const author="Balagurusamy";
const price=500;


//result=` Book name : ${title} author:${author} price:${price}`;
//console.log(result);

//declaring a array
const player=["Immanuel","Rahul"];
console.log(player.join('-'));
console.log(player)

let concat=player.concat(['Rohit','bhumra']);

console.log(player)
console.log(concat)
let pop=player.pop
console.log(pop)
console.log(player)

var a=20;
var b="20";
console.log(a==b);
console.log(a===b);//==== will compare type also

console.log(greet());


function greet(){
    console.log("Hello first js function"); 
}
greet();

function addNumber(a,b){
    return a+b;
}

console.log(addNumber(10,-1))


//function expression

// hosting mean write any where call any where  but not applicable to function expression

const addNumb=function(a,b){
    return a+b;
}

const mulNum=(a,b)=>a*b;


console.log(mulNum(30,3));


