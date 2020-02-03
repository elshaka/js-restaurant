import './css/contact.scss';

const contact = document.createElement('div');
const h2 = document.createElement('h2');
const form = document.createElement('form');
const labelName = document.createElement('label');
const inputName = document.createElement('input');
const labelMessage = document.createElement('label');
const textMessage = document.createElement('textarea');
const submit = document.createElement('button');

contact.id = 'contact';
h2.appendChild(document.createTextNode('Have anything to say?'));
labelName.appendChild(document.createTextNode('Name'));
labelMessage.appendChild(document.createTextNode('Message'));
submit.appendChild(document.createTextNode('Send'));
form.appendChild(labelName);
form.appendChild(inputName);
form.appendChild(labelMessage);
form.appendChild(textMessage);
form.appendChild(submit);

contact.appendChild(h2);
contact.appendChild(form);

export default contact;
