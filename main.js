class LateBloomer{
  constructor(){
    this.petalCount=Math.floor(Math.random()*12)+1;
  }
  bloom(){
    setTimeout(this.declare.bind(this), 1000);
  }
  declare(){
     console.log(`I am beutiful flower with ${this.petalCount} petals`);
  }
}

const lateBloomer=new LateBloomer();
// console.log(lateBloomer.petalCount)
lateBloomer.bloom()