class Vehicle{
    constructor(name){
        this.name=name;
    }
    start(){
        console.log("Vehicle has started  to move");
    }
    stop(){
        console.log("Vehicle has stoped moving");
    }

}
class Bike extends Vehicle{
    constructor(name){
        super(name)
    }
    start(){
        console.log(`${this.name} has started to move`);

    }
    stop(){
        console.log(`${this.name} has stoped moving`);

    }
}
class Car extends Vehicle{
    
    start(){
        console.log(`${this.name} has started to move`);
    }
    stop(){

    console.log(`${this.name} has stoped moving`);}
}


let tesla = new Car("tesla")
tesla.start()
tesla.stop()

let toyota = new Car("toyota")
toyota.start();
toyota.stop();

let Yamaha = new Bike("Mt15");
Yamaha.start();
Yamaha.stop();