export default class CumulativeSum {
  constructor() {
    this.value = 0;
  }
  add(number) {
      this.value += number;
      return this;
  }
}
