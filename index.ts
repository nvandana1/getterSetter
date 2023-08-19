import { Message } from './Message';

const message = new Message('Vandana', 'Hello,How are you?', 0, true);
console.log(message.messageRecieved);
console.log(message.isSent);
message.messageSent = 'I am Fine';
console.log(message.messageRecieved)