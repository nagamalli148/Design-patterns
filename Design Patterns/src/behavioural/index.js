import CumulativeSum from "./cumulativeSum";
import Command from "./command";
import SpecialMath from "./specialMath";
import { arrayOperations, listener } from "./userListener";

// Task - 1
console.log(new CumulativeSum().add(5).add(10).value);

// Task - 2
const commandObj = new Command(new SpecialMath(10));
console.log("Initial Value", 10);
commandObj.execute("square");
console.log("Command Value", commandObj.commandValue);
commandObj.execute("cube");
console.log("Command Value", commandObj.commandValue);
commandObj.execute("squareRoot");
console.log("Command Value", commandObj.commandValue);
console.log("Commands Given ", commandObj.executedCommands);

// Task - 3
const users = ["Alex Banks", "Eve Porcello"];
arrayOperations(users, listener);

users.push("sai");
users.push("teja");
users.pop();
console.log(users);
