const obj={
    firstName: 'jobayed',
    lastName: 'hossen',
    fullName:function(){
        return this.firstName+" "+ this.lastName;
    },
    [Symbol.toPrimitive](hint){
        if(hint==='number'){
            return 42;
        }
        return null;
    }
}
console.log(+obj)