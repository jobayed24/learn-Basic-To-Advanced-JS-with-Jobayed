function getNameAge(){
    this.name=()=>{
        return 'This is from Function';
    };
    this.age=45;
    this.profession='doing coding';
    return {
        profession: 'doing coding but comes from obj',
    };
}

const obj=new getNameAge();

console.log(obj.profession)

