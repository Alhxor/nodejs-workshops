function countWords(inputWords) {
    return inputWords.reduce(function(acc, current) {
        if (acc.hasOwnProperty(current))
            acc[current]++
        else
            acc[current] = 1
        return acc
    }, {})
}

module.exports = countWords


/* Official solution
function countWords(arr) {
      return arr.reduce(function(countMap, word) {
        countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
        return countMap
      }, {}) // second argument to reduce initialises countMap to {}
    }
*/