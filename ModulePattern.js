function EmployeeDetails() {
    var name ="Mayank"
    var age = 30;
    var designation = "Developer"
    
    return {
      name: name,
      age: age,
      designation: designation
    }
  }
  
  var newEmployee = EmployeeDetails()
  
  var userName = newEmployee.name;
  var userAge = newEmployee.age;
  var userDesignation = newEmployee.designation;
  console.log(userName);
  console.log(userAge);
  console.log(userDesignation);