/* eslint-disable class-methods-use-this */
export default class StringSchema {
  validators = [(value) => typeof value === 'string'];

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }

  startsFromUpperCase() {
    const numberList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '?', ' '];
    const validator = (value) => {
      if (value.length === 0) {
        return false;
        // eslint-disable-next-line
      } else if ((value[0].toUpperCase() === value[0]) && (!numberList.includes(value[0]))) {
        return true;
      } else {
        return false;
      }
    };
    this.validators.push(validator);
    return this;
  }

  length(num) {
    const validator = (value) => {
      if (value.length === num) {
        return true;
        // eslint-disable-next-line
      } else {
        return false;
      }
    };
    this.validators.push(validator);
    return this;
  }

  hasExclamation() {
    const arrCheck = ['!'];
    const validator = (value) => {
      if (value.includes(arrCheck)) {
        return true;
        // eslint-disable-next-line
    } else {
        return false;
      }
    };
    this.validators.push(validator);
    return this;
  }
}
