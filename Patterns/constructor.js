// constructor pattern is used to create object 
//pascal notation OneTwoTree;

// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//        function draw() {
//             console.log("circle is drawn");
//         };
//     }
// }
//   const circle = new Circle(1);
//   console.log(circle.radius);
//   console.log(circle.draw);

function Car( model, year, miles ) {

    this.model = model;
    this.year = year;
    this.miles = miles;
  
    this.toString = function () {
      return this.model + " has done " + this.miles + " miles";
    };
  }
  
  
  var civic = new Car( "Honda Civic", 2009, 20000 );
  var mondeo = new Car( "Ford Mondeo", 2010, 5000 );
  
  console.log( civic.toString() );
  console.log( mondeo.toString() );

