var srNo=[];
async function loadIntoTable(url,table){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data); 
    let index = 1;
    data.forEach(element => {
        
        table.innerHTML += 
        `<tr>
            <td>${element.rollNo}</td>
            <td>${element.name}</td>
            <td>${element.age}</td>
            <td>${element.email}</td>
            <td><button class="btn btn-primary" id="${element.id}"value="Delete" onclick="deleStudent(this)">Delete</button></td>
        </tr>
        `
        srNo.push(element.id)
        index++;
    });
    let h3 = document.querySelector("h3");
    h3.innerText = `Total records found : ${index-1}`;
    
}

loadIntoTable("http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students",document.querySelector("table"));


const form = document.querySelector("#myForm");
let name = document.querySelector("#name");
let rollNo = document.querySelector("#roll");
let age = document.querySelector("#age");
let email = document.querySelector("#email");

const createStudent = async (s)=>{

   
    const response = await fetch("http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students",{
        method : 'POST',
        body : JSON.stringify(
            {
                rollNo : s.rollNo,
                name : s.name,
                age : s.age,
                email : s.email
            }
            ),
            headers : {'Content-Type': 'application/json; charset=UTF-8'}
        });
            
            const student = await response.json();
            return student;
            
       
};

form.addEventListener('submit',async (e)=>{
e.preventDefault();
const newStudent = {
    rollNo : rollNo.value,
    name : name.value,
    age : age.value,
    email : email.value
};
const createdStudent = await createStudent(newStudent);

console.log(createStudent);
});

function deleStudent(student){
   
var url="http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students";
var id=student.id;
fetch(`${url}/${id}`,{
    method:'DELETE'
})
.then(res=>res.json)
var node=student.parentNode.parentNode;
    node.remove()
}



