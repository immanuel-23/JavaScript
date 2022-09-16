 
 function CustomerPrototype(proto) {
    this.proto = proto;

    this.clone = function () {
        var customer = new Customer();
        customer.first = proto.first;
        customer.last = proto.last;
        return customer;
    };
}

function Customer(first, last) {

    this.first = first;
    this.last = last;

    this.say = function () {
        console.log("name: " + this.first + " " + this.last);
    };
}

function run() {

    var proto = new Customer("Raj", "Agarwal");
    var prototype = new CustomerPrototype(proto);

    var customer = prototype.clone();
    customer.say();
}
run();