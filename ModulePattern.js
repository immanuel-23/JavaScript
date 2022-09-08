function EmployeeDetails() {
  var name = "Mayank";
  var age = 30;
  var designation = "Developer";

  return {
    name: name,
    age: age,
    designation: designation,
  };
}
// module pattern is used to wrap a set of variable and fuction together in a single scope

var newEmployee = EmployeeDetails();
console.log(newEmployee);

var userName = newEmployee.name;
var userAge = newEmployee.age;
var userDesignation = newEmployee.designation;
console.log(userName);
console.log(userAge);
console.log(userDesignation);
