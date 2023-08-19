export class SenderWithAge{
  name:string;
  age:number
}

export class SenderWithGender{
  name:string;
  gender:string
}
export class Message<S> {
  sender: S ;
  message: string;
  isSent: boolean;
  constructor(sender:S, message:string, isSent:boolean) {
    this.sender = sender;
    this.message = message;
    this.isSent = isSent;
  };

  get senderVal(){
    return this.sender;
  }

  set messageSent(msg: string) {
    this.message = msg;
  }
  get messageRecieved(): string {
    return this.message;
  }

  get status(): boolean {
    return this.isSent;
  }
}
