class Vehicle {
	constructor(make, model, year) {
		this.make = make;
		this.model = model;
		this.year = year;
	}
	honk() {
		return 'Beep.';
	}
	toString() {
		return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
	}
}

class Car extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 4;
	}
}

class Motorcycle extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 2;
	}
	revEngine() {
		return 'VROOM!!!';
	}
}

class Garage {
	constructor(capacity) {
		this.capacity = capacity;
		this.vehicles = [];
	}
	add(userInput) {
		//check for vehicle type:
		if (userInput instanceof Vehicle) {
			// if is under capacity
			if (this.vehicles.length < this.capacity) {
				// if a car, add car
				if (userInput instanceof Car) {
					this.vehicles.push('Car');
					return 'Vehicle added.';
				}
				// if a motorcycle, add motorcycle
				if (userInput instanceof Motorcycle) {
					this.vehicles.push('Motorcycle');
					return 'Vehicle added.';
				}
			}
			return "Sorry, we're full!";
		}
		return 'Only vehicles are allowed in here!';
	}
}
let myFirstVehicle = new Vehicle('Honda', 'Monster Truck', 1999);
myFirstVehicle.honk(); // "Beep."
myFirstVehicle.toString();

let myFirstCar = new Car('Toyota', 'Corolla', 2005);
myFirstCar.toString();
myFirstCar.honk();
myFirstCar.numWheels;

let myFirstMotorcycle = new Motorcycle('Honda', 'Nighthawk', 2000);

myFirstMotorcycle.toString();
// "The vehicle is a Honda Nighthawk from 2000."

myFirstMotorcycle.honk(); // "Beep."
myFirstMotorcycle.revEngine(); // "VROOM!!!"
myFirstMotorcycle.numWheels; // 2

let garage = new Garage(2);
garage.vehicles; // []
garage.add(new Car('Hyundai', 'Elantra', 2015)); // "Vehicle added!"
garage.vehicles; // [Car]
garage.add('Taco'); // "Only vehicles are allowed in here!"

garage.add(new Motorcycle('Honda', 'Nighthawk', 2000));
// "Vehicle added!"
garage.vehicles; // [Car, Motorcycle]

garage.add(new Motorcycle('Honda', 'Nighthawk', 2001));
// "Sorry, we're full."
