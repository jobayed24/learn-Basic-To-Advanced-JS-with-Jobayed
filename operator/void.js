// Expression : annonymouse class and assign it to a variable

const Rectangle= class{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
    // call the heigth and width
    cal(){
        return this.height*this.width;
    }
    getValue(){
        console.log(this.cal())
    }

}


const obj= new Rectangle(32,32);
obj.getValue();
