const obj=Object.create(
  {foo:1},
  {
    bar: {
      value: 'bar'
    },
    baz:{
      value: 'baz',
      enumerable: true
    }
  },
)

const obj1=Object.assign({},obj);
console.log('obj',obj,'obj1',obj1)