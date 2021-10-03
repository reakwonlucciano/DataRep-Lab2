//the class is to create a object
class BMI
{
    
//the constructor initalizes data in the class. 
    constructor(height, weight){
        this.height =height;
        this.weight = weight;
    }
    
//this is the method used to calculate.
    calculateBMI(){
        let bmi = this.weight/(this.height**2);
        return bmi;
    }
}

//

let myBMI = new BMI(2, 90);
let calc = myBMI.calculateBMI();
console.log(calc);
