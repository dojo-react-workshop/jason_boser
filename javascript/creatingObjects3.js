function Vehicle(name,wheels,passengers,speed){
    
    this.name = name;
    this.wheels = wheels;
    this.passengers = passengers;
    this.speed = speed;
    this.distance_traveled = 0;
    this.vin = Math.floor(Math.random()*1000000000);

}

Vehicle.prototype.updateDistanceTraveled = function(){
    this.distance_traveled += this.speed;
}

Vehicle.prototype.makeNoise = function(){
    console.log('vroom vroom');
}

Vehicle.prototype.move = function(){
    this.updateDistanceTraveled();
    this.makeNoise();
}

Vehicle.prototype.checkMiles = function(){
    console.log(this.distance_traveled);
}



let bike = new Vehicle('bike',2,1,10);
bike.makeNoise = function(){
    console.log('ring ring!');
}

console.log(bike);
bike.makeNoise();



let sedan = new Vehicle('sedan',4,5,25);
sedan.makeNoise = function(){
    console.log('honk honk!');
}

console.log(sedan);
sedan.makeNoise();



let bus = new Vehicle('bus',6,10,20);
bus.pickUpPassengers = function(count){
    this.passengers += count;
}

console.log(bus);
bus.pickUpPassengers(5);
console.log(bus);

bus.move();
bus.move();
bus.move();
console.log(bus);
bus.checkMiles();