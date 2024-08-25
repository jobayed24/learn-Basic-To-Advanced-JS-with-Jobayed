function RarellyNumber(number){
  this.number=number

}

RarellyNumber.prototype.valueOf=function(){
  return this.number;
}

const obj=new RarellyNumber(23);

console.log(obj)