const obj={firstName: 'jobayed',lastName: 'hossen'};

// changing the property descriptor of obj
Object.defineProperty(obj,'firstName',{
  enumerable: false,
  writable: false,
  configurable: false,
})
if(Object.hasOwnProperty(obj,'firstName')){
  console.log('jk')
}else{
  console.log('the property is not in Obj')
}
for(const local in obj){
  console.log(local)
}