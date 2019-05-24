var balanceManager = require('./balanceManager');
var changeHandler = require('./changeHandler');
var productInventory = require('./productInventory');

console.log(balanceManager.isValidAmount(50))
console.log(balanceManager.canAfford(20))

//console.log(changeHandler.convertToChange(76))
// console.log(changeHandler.convertToChange(25))
// console.log(changeHandler.convertToChange(50))
// console.log(changeHandler.convertToChange(75))
