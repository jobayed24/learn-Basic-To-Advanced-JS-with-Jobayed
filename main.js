const example = { foo: true, bar: true };
Object.prototype.name='jk'
for(const lc in example){
  if(Object.hasOwn(example,lc)){
    console.log(lc)
  }
}