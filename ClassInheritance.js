class Car{
    constructor(brand){
        this.carName=brand;
    }
    go(){
        console.log(`${this.carName} is moving`);
    }
    stop(){
        console.log(`${this.carName} is stoped moving`);
    }
}


let tesla= new Car("Tesla")
tesla.go();
tesla.stop()
