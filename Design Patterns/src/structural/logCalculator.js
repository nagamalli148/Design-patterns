import CleverCalculator from "./cleverCalculator";

export default class LogCalculator extends CleverCalculator {
  constructor() {
    super();
    this.operationName = {
      add: "Addition",
      sub: "Subraction",
      multiply: "Multiplication",
      divide: "Division"
    };
  }
  log(type, n1, n2) {
    console.log(
      `${this.operationName[type]} of ${n1} and ${n2} is ${this.operations(
        type,
        n1,
        n2
      )}`
    );
  }
}
