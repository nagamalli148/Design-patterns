import NewCalculator from "./newCalculator";

export default class CalAdapter {
  constructor() {
    this.newCalculatorObj = new NewCalculator();
  }

  multiply(obj, n) {
    return this.newCalculatorObj.multiply(obj.res, n);
  }
}
