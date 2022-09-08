function x(){
    const a=100;
    function y(){
        console.log(a);
        
    }
    return y;
}

var z=x();
console.log(z);
z();//closure it still has the value of a because it has the reference of a

function makeFunc() {
    const name = 'Mozilla';
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  console.log(myFunc);
  myFunc();
  

  /*
  A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
  In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created,
   at function creation time.
   */