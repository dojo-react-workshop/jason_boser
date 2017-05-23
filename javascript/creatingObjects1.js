function VehicleConstructor(name,wheels,passengers){
    var newVehicle = {};

    newVehicle.name = name;
    newVehicle.wheels = wheels;
    newVehicle.passengers = passengers;

    newVehicle.makeNoise = function(){
        console.log('vroom vroom');
    }

    return newVehicle;
}



console.log(VehicleConstructor('test',4,8))

let bike = VehicleConstructor('bike',2,1);
bike.makeNoise = function(){
    console.log('ring ring!');
}

console.log(bike);
bike.makeNoise();



let sedan = VehicleConstructor('sedan',4,5);
sedan.makeNoise = function(){
    console.log('honk honk!');
}

console.log(sedan);
sedan.makeNoise();



let bus = VehicleConstructor('bus',6,10);
bus.addPassengers = function(count){
    this.passengers += count;
}

console.log(bus);
bus.addPassengers(5);
console.log(bus);