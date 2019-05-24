var balance = 0;

module.exports = {
  isValidAmount: function(amount) {
    return (amount === undefined || amount == null) ? false : true
  },
  
  canAfford: function(amount) {
    if (this.isValidAmount(amount))
      return amount <= balance;
    throw new Error('Invalid amount ' + amount);
  },

  decreaseBalance: function(amount) {
    if (!this.canAfford(amount)) {
      throw new Error('Insufficient balance');
    }
    balance -= amount;
  },

  getBalance: function() { 
    return balance;
  },
  
  increaseBalance: function(amount) {
    balance += amount;
  },
};
