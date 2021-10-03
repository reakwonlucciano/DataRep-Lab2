//this class is a blueprint to create objects

class vehicle
{
    
 //this constructor initializes data which takes three arguments.
    
    constructor(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    }
//this is a method (information) is used 
    
    Information(){
        console.log(`Make:${this.make}`);
        console.log(`Model:${this.model}`);
        console.log(`Year:${this.year}`);
    }
}


class Cars extends vehicle
{
    constructor(make, model, year, doors)
    {
       super(make, model, year);
        this.doors = doors;
    }
Information(){
    super.Information();
    console.log(`Doors: ${this.doors}`)
}
}
//created a variable 

let mycar = new Cars('VW', 'polo', 2021, 24);
mycar.Information();
// let myvehicle = new vehicle('VW', 'golf', 2021);
// myvehicle.Information();
