const lo = require('lodash')
const numlist = require('./module-practice')
console.log(numlist)

const items = [1, [2, [3, 5]]]
const newItems = lo.flattenDeep(items)
console.log(newItems)

