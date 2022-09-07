const now = new Date();
console.log(now);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getSeconds());
console.log(now.toTimeString());

console.log("Time stamp "+now.getTime());// time in mili sec

console.log(now.getTimezoneOffset());
console.log(now.getUTCDate());
console.log(now.getUTCDay());
console.log(now.toLocaleTimeString());
console.log(now.toJSON(
));

// var date1 = new Date('12/12/2010');
// var date2 = new Date('12/12/2010');
// var diffDays = date2.getDate() - date1.getDate(); 
// alert(diffDays)

const before=new Date("Sat Aug 03 2022 13:33:24");

console.log(before);

const after=new Date();
console.log(after);


const diff = after.getTime()-before.getTime();
console.log(Math.round(diff/(1000*60*60*24)));