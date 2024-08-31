//How to use the static method, static prop, and parent to child property method

// // Parent consturctor
// function ParentWithStatic(){
// }

// ParentWithStatic.startPosition={x:0,y:1}; //static member property

// ParentWithStatic.getStartPosition=function(){
//     return this.startPosition;
// }

// // Child constructor inherite the Parent Constructor
// function Child(x,y){
//     this.position={x,y};
// }

// Child.prototype=Object.create(ParentWithStatic.prototype,{
//     // return original constructor to child
//     constructor:{
//         value: Child,
//         enumerable: false,
//         consfigureable: true,
//         writeable: true,
//     }
// });
// Child.prototype.getOffSetByInitialPosition=function(){
//     const position= this.position;
//     // using constructor hope i will get getStartPosition
//     const startPosition=this.constructor.getStartPosition();
//     return{
//         offSetX: startPosition.x-position.x,
//         offSetY: startPosition.y-position.y,
//     }
// }

// const child=new Child(3,4);
// console.log(child)


function Vehicle() {}

// Static member property
Vehicle.initialSpeed =20;
Vehicle.prototype.name=function(){
    console.log('parent name')
}
// Static method
Vehicle.getInitialSpeed = function () {
  return this.initialSpeed;
};

function Car(speed) {
    // Vehicle.call(this) // call super class constructor
  this.speed = speed;
}
// Object.assign(Car,Vehicle )

// // Inherit from Vehicle
// Car.prototype = Object.create(Vehicle.prototype
//     , 
//     {
//   // Restore constructor reference to Car
//   constructor: {
//     value: Car,
//     enumerable: false,
//     writable: true,
//     configurable: true,
//   },
// }
// );


Object.setPrototypeOf(Car.prototype, Vehicle.prototype);
Object.setPrototypeOf(Car, Vehicle);


Car.prototype.name=function(){
    console.log('Child name')
}

// Method to calculate the speed offset from the initial speed
// Car.getInitialSpeed=function(){
//     return 10;
// }
// Car.getInitialSpeed=function(){
//     return 10;
// }
Car.getInitialSpeed=function(){
    return 10;
}
Car.prototype.getSpeedOffset = function () {
  const currentSpeed = this.speed;
  // Using this.constructor to access the static method getInitialSpeed
  const initialSpeed = this.constructor.getInitialSpeed();
  console.log( this);
//   console.log('this', this.constructor.getInitialSpeed());
  
  return {
    offsetSpeed: currentSpeed - initialSpeed,
  };
};

// Create an instance of Car with a speed of 60
const myCar = new Car(60);

myCar
// Calculate and log the speed offset from the initial speed
console.log(myCar.getSpeedOffset()); // Output: { offsetSpeed: 60 }
// myCar.name()


