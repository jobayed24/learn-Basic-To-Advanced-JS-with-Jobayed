let userIdSymbol=Symbol('userId');
let userPassSymbol=Symbol('userPass');

class User{
    constructor(name,userId,userPass){
        this.name=name;
        this[userIdSymbol]=userId;
        this[userPassSymbol]=userPass;
    }

    getUserId(){
        return this[userIdSymbol];
    }
    updatePass(newpass){
        this[userPassSymbol]=newpass;
    }
    validateUserPass(newpass){
        return this[userPassSymbol]==newpass;
    }
}

const obj1=new User('jobayed','a1','a11');
console.log(obj1.getUserId('a1'))