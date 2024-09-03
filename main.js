class Button{
  constructor(name){
    this.name=name;
    this.count=0;
    this.handleClick=this.handleClick.bind(this);
    this.buttonElement=document.createElement('button');
    this.buttonElement.innerText=this.name;
    this.buttonElement.addEventListener('click',this.handleClick)
    document.body.appendChild(this.buttonElement)
  }
  handleClick(){
    this.count++;
    console.log(`${this.name} is clicked ${this.count} times`)
  }

}

const buttona=new Button('Button 1')
const buttonb=new Button('Button 2')