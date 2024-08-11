//simple array
const arr = ["a", "b", "c"];
// find out the keys of array
const arrayKeys=Object.keys(arr);
console.log(arrayKeys)
//array like object
const arrayObj={
  1: 'Orange',
  2: 'Apple',
  3: 'Pineapple',
  4: 'Graps',
};

// get-out the keys of arrayObj
const arrayObjKeys=Object.values(arrayObj)
console.log(arrayObjKeys);

//non enumerable property
const objEnumerable=Object.create({},{
  getFoo:{
    value(){
      return this.foo;
    },
  }
})

objEnumerable.foo='foo is here';
// object keys help to get the keys of non numerable property
console.log(Object.keys(objEnumerable))

for(const objKeys of Object.getOwnPropertyNames(objEnumerable)){
  console.log(objKeys)
}
console.log(Object.getOwnPropertyNames(objEnumerable))
console.log(Object.values('foo'))