const request = new XMLHttpRequest();

// const getTodos=()=>{
// request.addEventListener('readystatechange',()=>{
//     if(request.readyState==4 && request.status==200){
//         console.log("isidee request.readystate");
//         console.log(request.responseText);
//     }else if(request.readyState==4){
//         console.log("count not fetch data");
//     }
    
// })

// }

/**
 *  Ready states
 * 0-unsent
 * 1-open
 * 2-header received
 * 3-loading
 * 4-complete/done
 **/
/**
 * response status
 * note for correct url status code 200
 * 
 * 100-199:informational response
 * 200-299:sucess response
 * 300-399: redirection messages
 * 400-499: client error message
 * 500-599: server error ,message
 * 
 **/
// request.open("GET", "https://jsonplaceholder.typicode.com/todos")

// request.send();
// console.log(request);
// getTodos();





// coding using call back function
const getTodos=(callback)=>{
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange',()=>{
        if(request.readyState==4 && request.status==200){
            const data1=JSON.parse(request.responseText)
            console.log("inside request.readystate");
            console.log(request.responseText);
        }else if(request.readyState==4){
            callback("count not fetch data",undefined);
        }
        
    })
   // request.open("GET", "https://jsonplaceholder.typicode.com/todos")
   request.open("GET","books.json")
request.send();
    
}
getTodos((err,data)=>{
    console.log("callback called");
    if(err){
        console.log(" "+err);
    }else{
        console.log(data);
    }
})

