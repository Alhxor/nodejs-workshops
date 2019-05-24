function duckCount() {
    var args = Array.prototype.slice.call(arguments)
    return args.reduce(function (duckCount, currentBird) {
        if (Object.prototype.hasOwnProperty.call(currentBird,
                                                 "quack"))
            return duckCount + 1
        return duckCount
    }, 0)
}

module.exports = duckCount

/* Official solution
function duckCount() {
      return Array.prototype.slice.call(arguments).filter(function(obj) {
        return Object.prototype.hasOwnProperty.call(obj, 'quack')
      }).length
    }
*/
