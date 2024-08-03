function functionBody(){
  return this.a;
}


const boundBody=functionBody.bind({a:'this is jobayed'});

console.log(boundBody());

const secondBoundBody=boundBody.bind({a: 'this is second function body'});

console.log(secondBoundBody())