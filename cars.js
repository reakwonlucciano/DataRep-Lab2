//this class is to 
class vehicle
{
    constructor(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    }

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
let mycar = new Cars('VW', 'polo', 2021, 24);
mycar.Information();
// let myvehicle = new vehicle('VW', 'golf', 2021);
// myvehicle.Information();
