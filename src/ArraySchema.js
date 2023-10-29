/* eslint-disable class-methods-use-this */
export default class StringSchema {
  validators = [(value) => Array.isArray(value)];

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }
}
