class Notification{
  constructor(type,sender){
    this.type=type;
    this.sender=sender;
  }

  show(){
    console.log(`sending ${this.sender} from ${this.type}`);
  }
};

const systemNotification=Notification.bind(null,'System');//predefined value of type means always set specific sender
const emailNotification=new systemNotification('email');
emailNotification.show()