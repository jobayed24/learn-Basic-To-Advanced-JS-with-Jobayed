// built money class
class Money{
    constructor(amount,currency){
        this.amount=amount;
        this.currency=currency;
    }
    valueOf(){
        return this.amount;
    }
    toString(){
        return `${this.currency}${this.amount}`
    }
}

const salary=new Money(700,'$');
const bonous=new Money(300,'$');
const total=salary+bonous;
console.log(total);

console.log(`Salary: ${salary}`);
console.log(`Bonous: ${bonous}`)
