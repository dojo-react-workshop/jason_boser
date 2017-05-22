function VehicleConstructor(name,wheels,passengers){
    var newVehicle = {};

    newVehicle.name = name;
    newVehicle.wheels = wheels;
    newVehicle.passengers = passengers;

    return newVehicle;
}

console.log(VehicleConstructor('test',4,8))