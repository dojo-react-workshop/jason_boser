function vehicleConstructor(name,wheels,passengers,speed){
    var distance_traveled = 0;

    this.name = name;
    this.wheels = wheels;
    this.passengers = passengers;
    this.speed = speed;

    updateDistanceTraveled = function(){
        distance_traveled += speed;
    }

    this.makeNoise = function(){
        console.log('vroom vroom');
    }

    this.move = function(){
        updateDistanceTraveled();
        this.makeNoise();
    }

    this.checkMiles = function(){
        console.log(distance_traveled);
    }
}



let bike = new vehicleConstructor('bike',2,1,10);
bike.makeNoise = function(){
    console.log('ring ring!');
}

console.log(bike);
bike.makeNoise();



let sedan = new vehicleConstructor('sedan',4,5,25);
sedan.makeNoise = function(){
    console.log('honk honk!');
}

console.log(sedan);
sedan.makeNoise();



let bus = new vehicleConstructor('bus',6,10,20);
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