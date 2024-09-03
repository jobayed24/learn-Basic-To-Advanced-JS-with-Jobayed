'use strict';
// top level of this refer global object in strict mood
this.x='jobayed';
const obj={
  x: 'tanvir',
  getX: function(){
    return this.x;
  }
}

const getx=obj.getX; //getX unbound from obj and behave as standalone function and it refer undefined in strict mood
const bindGetx=obj.getX.bind(obj);// bind getX to obj 
console.log(bindGetx())