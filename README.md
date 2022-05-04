# Binary Search Tree

This is an implementation of a [binary search tree](https://en.wikipedia.org/wiki/Binary_search_tree) in node.js. This implementation ignores duplicate values. Integer values are supported by default but there is support for implementing a custom comparison function. See `objectComparator` for one possible example of how this can be achieved.

## Getting Started:
```
$ npm install
$ npm test # if you'd like to run the tests 
```

## Usage:
```
const { BinarySearchTree } = require('./index')

const bst = new BinarySearchTree([26, 82, 16, 92, 33])
const { deepest, depth } = bst.getDeepestNodesAndDepth()
console.log(`deepest: ${deepest}; depth ${depth}`)
```

## Reference:
Constructor accepts two optional arguments:

1. An array of initialization values
2. A comparator function for custom comparisons. By default, this will be `integerComparator`


**`insert(val)`** - insert an individual value

**`search(val)`** - returns `true` or `false` depending on whether the given `val` was found in the tree 

**`delete(val)`** - delete a value from the tree

**`traverse(val)`** - traverses the tree and outputs the values in order

**`getDeepestNodesAndDepth()`** - returns an object with keys `deepest` and `depth` representing the values found at the deepest level of the tree along with the depth of the tree
