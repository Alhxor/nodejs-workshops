module.exports = function arrayMap(arr, fn, thisArg) {
  return arr.reduce(
      (newarr, el, ind, arr) => [...newarr, fn.call(thisArg, el, ind, arr)], []
  )
}

/* Official solution
module.exports = function arrayMap(arr, fn, thisArg) {
  return arr.reduce(function(acc, item, index, arr) {
    acc.push(fn.call(thisArg, item, index, arr))
    return acc
  }, [])
}
*/
