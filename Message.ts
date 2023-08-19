export class Message {
  sender: string;
  message: string;
  id: number;
  isSent: boolean;
  constructor(sender, message, id, isSent) {
    this.sender = sender;
    this.message = message;
    this.id = id;
    this.isSent = isSent;
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
