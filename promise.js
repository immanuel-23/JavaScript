//promise-resolved , rejected
// promise demo 

const getSomething=()=>{
    return new Promise((resolve,reject)=>{
        resolve("Data Resolved ") // if everything is right then resolve will work  and if not then reject both cant be used at a time
        reject("Could not fetch data ...")
    })
}
getSomething().then((data)=>{
    console.log(data);
},(err)=>{
    console.log(err);
})