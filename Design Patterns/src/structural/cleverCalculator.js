import UltimateCalculator from "./ultimateCalculator";

export default class CleverCalculator {
  constructor() {
    this.ultimateCalculator = new UltimateCalculator();
    this.cache = {
      add: {},
      sub: {},
      multiply: {},
      divide: {}
    };
  }

  operations(operationType, value1, value2) {
    let cacheValue;
    let operation;
    switch (operationType) {
      case "add":
        cacheValue = this.cache[operationType];
        operation = `${value1}+${value2}`;
        if (!cacheValue[operation]) {
          cacheValue[operation] = this.ultimateCalculator.add(value1, value2);
        }
        return cacheValue[operation];
      case "sub":
        cacheValue = this.cache[operationType];
        operation = `${value1}-${value2}`;
        if (!cacheValue[operation]) {
          cacheValue[operation] = this.ultimateCalculator.sub(value1, value2);
        }
        return cacheValue[operation];
      case "multiply":
        cacheValue = this.cache[operationType];
        operation = `${value1}*${value2}`;
        if (!cacheValue[operation]) {
          cacheValue[operation] = this.ultimateCalculator.multiply(
            value1,
            value2
          );
        }
        return cacheValue[operation];
      case "divide":
        cacheValue = this.cache[operationType];
        operation = `${value1}/${value2}`;
        if (!cacheValue[operation]) {
          cacheValue[operation] = this.ultimateCalculator.divide(
            value1,
            value2
          );
        }
        return cacheValue[operation];
    }
  }
}
