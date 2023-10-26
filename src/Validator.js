/* eslint-disable class-methods-use-this */
import StringSchema from './StringSchema.js';
import ArraySchema from './ArraySchema.js';

export default class Validator {
  string() {
    return new StringSchema();
  }

  array() {
    return new ArraySchema();
  }
}
