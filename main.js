/// use-case of [Symbol.toPritive]()

//assume we have class which used for ecommerce website to manipulate the input in different ways.

class CurrencyFormatter{
    constructor(amount,currency,location){
        this.amount=amount;
        this.currency=currency;
        this.location=location;
    }

    formateCurrency(){
        const formatter= new Intl.NumberFormat(this.location,{
            style:'currency',
            currency: this.currency,
        })
        return  formatter.format(this.amount)
    }

    [Symbol.toPrimitive](hint){
        switch(hint){
            case 'string':
                return this.formateCurrency();
            case 'number':
                return this.amount;
            default:
                return `${this.formateCurrency()} (${this.currency})`; // default value not worked
        }
    }
}

const usdPrice=new CurrencyFormatter(1000,'USD','en-US');
const bd=new CurrencyFormatter(100,'SAR','SA');
console.log(`${bd}`)
console.log(usdPrice);
console.log(`${usdPrice}`);
console.log(usdPrice.toString())