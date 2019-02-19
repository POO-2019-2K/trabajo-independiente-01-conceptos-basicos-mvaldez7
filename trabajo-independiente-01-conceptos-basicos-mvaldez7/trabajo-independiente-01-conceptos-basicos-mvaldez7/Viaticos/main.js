import Expense from "./gasto.js";

let g1 = new Expense("Juan Perez", "Department Chief", "3 days", 3800, 1200, 2000);

g1.printf();

g1.totalExpenses();

g1.daysOut = "5 days";

g1.printf();