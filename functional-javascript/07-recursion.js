function reduce_helper(arr, fn, initial, index, full_arr) {
    if (!arr.length)
        return initial
    var head = arr[0]
    var tail = arr.slice(1)
    return reduce_helper(tail, fn,
                         fn(initial, head, index, full_arr),
                         index + 1, full_arr)
}

function reduce(arr, fn, initial) {
    return reduce_helper(arr, fn, initial, 0, arr)
}

module.exports = reduce

/* Official solution
function reduce(arr, fn, initial) {
  return (function reduceOne(index, value) {
    if (index > arr.length - 1) return value // end condition
    return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
  })(0, initial) // IIFE. kick off recursion with initial values
}
*/
