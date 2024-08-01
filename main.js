//root bluePrint of the class
class vehicle{
    constructor(brandName,typesOfEngine,dateOfProduction){
        this.brandName=brandName;
        this.typesOfEngine=typesOfEngine;
        this.dateOfProduction=dateOfProduction;
    }
}

class car extends vehicle{
    // object or class property always set inside constructor function
    constructor(brandName,typesOfEngine,dateOfProduction){
        super(brandName,typesOfEngine,dateOfProduction)
        this.color="Blue";
        this.mileAge=43;
        this.consumptionOfFeul='34'
    }
    
}

class truck extends vehicle{
    constructor(brandName,typesOfEngine,dateOfProduction){
        super(brandName,typesOfEngine,dateOfProduction)
        this.length='15 meter';
        this.goodWithWeight='189 kg';
        this.wheels='4'
    }

    totalWheelsOfCar(){
        const spareOfWheel=2;
        const totalWheels=Number(spareOfWheel)+Number(this.wheels);
        return totalWheels;
    }
}

class van extends vehicle{
    constructor(brandName,typesOfEngine,dateOfProduction){
        super(brandName,typesOfEngine,dateOfProduction)
        this.length='12 meter';
        this.color= 'maroon';
        this.isDrivingLicense= 'yeah, need driving license'
    }
}
class bus extends vehicle{
    constructor(brandName,typesOfEngine,dateOfProduction){
        super(brandName,typesOfEngine,dateOfProduction)
        this.totalSeat='78';
        this.isHeavyLicense= 'yeah need havy license';
        this.drivingHealthQuality= 'health quality should be well';
        this.destination= 'destination is Cumilla to Dhaka'
    }
}

const truckObj= new truck('mercedes','diesel','1948');

console.log(truckObj.totalWheelsOfCar())


