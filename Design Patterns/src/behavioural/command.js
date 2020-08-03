export default class Command {
  constructor(specialMathObj) {
    this.commandValue;
    this.specialMath = specialMathObj;
    this.executedCommands = [];
  }

  execute(command) {
    this.commandValue = this.specialMath[command]();
    this.executedCommands.push(command);
  }
}
