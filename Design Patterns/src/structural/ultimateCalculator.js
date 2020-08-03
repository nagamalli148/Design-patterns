import NewCalculator from "./newCalculator";
import OldCalculator from "./oldCalculator";

export default class UltimateCalculator extends NewCalculator {
  constructor() {
    super();
    this.oldCalculator = new OldCalculator();
  }

  add(value1, value2) {
    return this.oldCalculator.operations(value1, value2, "add").res;
  }

  sub(value1, value2) {
    return this.oldCalculator.operations(value1, value2, "sub").res;
  }
}
