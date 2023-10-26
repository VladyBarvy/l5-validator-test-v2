import Validator from './src/Validator.js';

export default Validator;
/*
const v = new Validator();

const schema1 = v.string();
console.log(schema1.isValid('hexlet')); // true;

const schema2 = v.string().startsFromUpperCase()
console.log(schema2.isValid('hexlet')); // false;
console.log(schema2.isValid(' hello?')); // false;
console.log(schema2.isValid('Hi')); // true;
console.log(schema2.isValid('!Hi')); // false;
console.log(schema2.isValid('1Hi')); // false;

console.log('------------------');

console.log(schema2.isValid('')); // false;
console.log(schema2.isValid('AAAA')); // true;
console.log(schema2.isValid(' ')); // false;
console.log(schema2.isValid('?')); // false;
console.log(schema2.isValid('QAA')); // true;

console.log('------------------');

const schema3 = v.string().length(5).startsFromUpperCase()
console.log(schema3.isValid('hexlet')); // false;
console.log(schema3.isValid(' hello?')); // false;
console.log(schema3.isValid('Hieee')); // true;
console.log(schema3.isValid('!Hide')); // false;

console.log('------------------');

const schema4 = v.string().length(5).startsFromUpperCase().hasExclamation()
console.log(schema4.isValid('hexlet')); // false;
console.log(schema4.isValid(' hello?')); // false;
console.log(schema4.isValid('Hieee')); // false;
console.log(schema4.isValid('Hide!')); // true;

console.log('------------------');

const q = new Validator();
const schema5 = q.array();

console.log(schema5.isValid([])); // true
console.log(schema5.isValid({})); // false
console.log(schema5.isValid(123)); // false
console.log(schema5.isValid('Hexlet')); // false
*/
