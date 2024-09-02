'use strict'
function log(...args){
    console.log(this,...args);
}

const bind1=log.bind('hi',1,2,3);
const bind2=bind1.bind('another hi',4,5,6);
bind2(10,11)