import { Message } from './Message';

const message = new Message('Vandana', 'Hello,How are you?', 0, true);
console.log(message.messageRecieved);
console.log(message.isSent);
message.messageSent = 'I am Fine';
console.log(message.messageRecieved);

// destructing
const details = {name:'vandana',age:22}
const {name,age} = details;
console.log(name,age);

// spread operator or deep copy
const employees = ['vandana','pranav'];
const notDeepCopy = employees;
const all = [...employees];
employees.push('Prajna')
console.log(all,'deep copied');
console.log(employees,'original');
console.log(notDeepCopy,'this is pass by reference');