import Factory from "./factory";

const factory = new Factory();
const alex = factory.getInstance("shopper", "Alex Banks", 100);
console.log("Alex", alex);
const eve = factory.getInstance("employee", "Eve Porcello", 100);
console.log("Eve", eve);

//This should return the same instance
const eve2 = factory.getInstance("employee", "Different Eve Porcello", 100);
console.log("Another Eve", eve2);
