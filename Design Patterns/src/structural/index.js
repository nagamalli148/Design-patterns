import OldCalculator from "./oldCalculator";
import CalAdapter from "./calAdapter";
import UltimateCalculator from "./ultimateCalculator";
import CleverCalculator from "./cleverCalculator";
import LogCalculator from "./logCalculator";

const oldCalculator = new OldCalculator();
const calcAdapter = new CalAdapter();
const value = calcAdapter.multiply(oldCalculator.operations(3, 2, "add"), 6);
console.log(value);

const ultimateCalculator = new UltimateCalculator();
console.log("Multiplication", ultimateCalculator.multiply(3, 200));
console.log("Division", ultimateCalculator.divide(400, 200));
console.log("Addition", ultimateCalculator.add(3, 200));
console.log("Subraction", ultimateCalculator.sub(204, 200));

const cleverCalculator = new CleverCalculator();
console.log("Multiplication", cleverCalculator.operations("multiply", 3, 200));
console.log("Division", cleverCalculator.operations("divide", 400, 200));
console.log("Addition", cleverCalculator.operations("add", 3, 200));
console.log("Subraction", cleverCalculator.operations("sub", 204, 200));
console.log("Cache", cleverCalculator.cache);

const logCalculator = new LogCalculator();
logCalculator.log("add", 1, 2);
logCalculator.log("sub", 1, 2);
logCalculator.log("multiply", 1, 2);
logCalculator.log("divide", 1, 2);
