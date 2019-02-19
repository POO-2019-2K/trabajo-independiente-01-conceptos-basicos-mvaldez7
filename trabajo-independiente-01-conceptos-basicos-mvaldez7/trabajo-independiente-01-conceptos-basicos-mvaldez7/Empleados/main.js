import Employee from "./empleado.js";

let e1 = new Employee("Juan Perez", "Administration", "Boss", "40", 2005);

e1.printf();

console.log(e1.charge);

e1.charge = "Department Boss";

e1.printf();

e1.getSeniorship();