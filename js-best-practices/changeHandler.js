// COINS:
// [p]enny
// [n]ickel
// [d]ime
// [q]uarter

var coins = {
	'p': 1,
	'n': 5,
	'd': 10,
	'q': 25,
}

var coinTypesByValue = ['q', 'd', 'n', 'p']

module.exports = {
  getAmount: function(coinType) {
	if (coinType in coins)
		return coins[coinType]
    throw new Error('Unrecognized coin ' + coinType);
  },
  
  convertToChange: function(cents) {
    var coinArr = []
    coinTypesByValue.forEach(function(coinType) {
      while (cents >= coins[coinType]) {
        coinArr.push(coinType)
        cents -= coins[coinType]
      }
    })
    return coinArr
  }
};

/*
  convertToChange: function(cents) {
    console.log("Running convertToChange(" + cents + ")")
    var coinArr = []
    coinTypesByValue.forEach(function(coinType) {
      console.log("  coinType == " + coinType + "")
      while (cents >= coins[coinType]) {
        console.log("    adding " + coinType)
        coinArr.push(coinType)
        cents -= coins[coinType]
      }
      console.log(cents + "  cents left to process")
    })
    return coinArr
  }
*/