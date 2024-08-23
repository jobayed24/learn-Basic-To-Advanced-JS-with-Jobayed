const obj = {
    prop() {},
    foo: "bar",
  };
  Object.seal(obj);

  obj.foo='foo';
  function tellYourName(){
    console.log('jk')
  }
  console.log(obj.foo)
  Object.defineProperty(obj,'foo',{
    get(){
        return tellYourName;
    }
  })