const obj={
    animal:'cats',
    slepDuration:'12 housrs and 16 hours'
};

function greet(){
    console.log(this.animal,'typically sleep between',this.slepDuration);
};

greet.call(obj);