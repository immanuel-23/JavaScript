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
  