function personConstructor(name){
    var person = {
        name:name,
        distance_traveled:0,
        say_name:function(){
            console.log(this.name);
        },
        say_something:function(text){
            console.log(`${this.name} says ${text}`);
        },
        walk:function(){
            this.distance_traveled += 3;
            console.log(`${this.name} is walking, total distance = ${this.distance_traveled}`);
        },
        run:function(){
            this.distance_traveled += 10;
            console.log(`${this.name} is running, total distance = ${this.distance_traveled}`);
        },
        crawl:function(){
            this.distance_traveled += 1;
            console.log(`${this.name} is crawling, total distance = ${this.distance_traveled}`);
        }
    }
    return person;
}

function ninjaConstructor(name,cohort){
    var ninja = {
        name:name,
        cohort:cohort,
        belt_level:'yellow',
        levelUp:function(){
            switch(this.belt_level){
                case 'yellow':
                    this.belt_level = 'green';
                    break;
                 case 'green':
                    this.belt_level = 'red';
                    break;
                case 'red':
                    this.belt_level = 'black';
                    break;
                case 'black':
                    console.log(`${name} is already a black belt.`)
                    break;
            }
        },
        whoCohort:function(){
            console.log(`${this.name} has the cohort ${this.cohort}`);
        },
        whatLevel:function(){
            console.log(`${this.name} is at level ${this.belt_level}`);
        }
    }
    return ninja;
}

let ninjaHolly = ninjaConstructor('Holly','Matt');
ninjaHolly.whatLevel();
ninjaHolly.levelUp();
ninjaHolly.levelUp();
ninjaHolly.whatLevel();
ninjaHolly.levelUp();
ninjaHolly.levelUp();
ninjaHolly.whoCohort();