
function Vehicle(name,numOfWheels,numOfPassengers,speed=0){
    // this = {}

    this.name = name;
    this.speed = speed;

    // return this;
}

Vehicle.prototype.accelerate = function(velChg = 1){
    this.speed += velChg;
    return this.speed;
}

const v1 = new Vehicle('sedan',4);
const v2 = new Vehicle('big rig',18);
const v3 = new Vehicle('bus',24);

console.log(v1.speed);
v1.accelerate(5);
console.log(v1.speed);


// const VehicleConstructor = (function(name,numOfWheels,numOfPassengers,speed=0){
//     const vehiclePrototype = {
//         accelerate: function(velChg = 1){
//             this.speed += velChg;
//             return this.speed;
//         }
//     }

//     return function VehicleConstructor(name,numOfWheels,numPass,speed=0){}
//         const vehicle = Object.create(vehiclePrototype); //attaches the prototype to each Vehicle
//         vehicle.name = name;
//         vehicle.speed = speed;

//         return vehicle;
//     }

// })();