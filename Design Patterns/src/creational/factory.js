import Employee from "./employee";
import Shopper from "./shopper";

export default class Factory {
  constructor() {
    this.employee = null;
  }

  getInstance(type, name, money = 100, employer = "") {
    if (type === "shopper") {
      return new Shopper(name, money);
    } else if (type === "employee") {
      if (this.employee) {
        console.log("Same instance is returned");
        return this.employee;
      } else {
        return (this.employee = new Employee(name, money, employer));
      }
    }
  }
}
