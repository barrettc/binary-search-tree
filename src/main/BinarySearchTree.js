'use strict'

const Node = require('./Node')
const integerComparator = require('./integerComparator')

class BinarySearchTree {
  constructor (values = [], comparator = integerComparator) {
    this.root = null
    this.comparator = comparator

    for (const value of values) {
      this.insert(value)
    }
  }

  insert (value) {
    this.root = this._insert(value, this.root)
  }

  _insert (value, node) {
    if (!node) {
      return new Node(value)
    }
    switch (this.comparator(value, node.value)) {
      case 'LESS_THAN':
        node.left = this._insert(value, node.left)
        break
      case 'GREATER_THAN':
        node.right = this._insert(value, node.right)
        break
      case 'EQUAL':
        return node
    }
    return node
  }

  search (value, node = this.root) {
    if (!node) return false
    if (this.comparator(value, node.value) === 'EQUAL') return true

    if (this.comparator(node.value, value) === 'LESS_THAN') return this.search(value, node.right)

    return this.search(value, node.left)
  }

  delete (value) {
    this.root = this._delete(value, this.root)
  }

  _delete (value, node) {
    if (!node) return node

    switch (this.comparator(value, node.value)) {
      case 'LESS_THAN':
        node.left = this._delete(value, node.left)
        break
      case 'GREATER_THAN':
        node.right = this._delete(value, node.right)
        break
      case 'EQUAL':
        if (node.left === null) {
          return node.right
        } else if (node.right === null) {
          return node.left
        }

        // node with two children
        node.value = this._findSmallestValue(node.right)
        node.right = this._delete(node.value, node.right)
    }
    return node
  }

  _findSmallestValue (node) {
    if (!node.left) return node.value
    return this._findSmallestValue(node.left)
  }

  traverse (node = this.root) {
    if (node) {
      this.traverse(node.left)
      process.stdout.write(node.value + ' ')
      this.traverse(node.right)
    }
  }

  getDeepestNodesAndDepth () {
    this.deepest = []
    this.depth = Number.MIN_SAFE_INTEGER
    this._getDeepestNodesAndDepth(this.root, 0)
    return { depth: this.depth, deepest: this.deepest }
  }

  _getDeepestNodesAndDepth (node = this.root, level = 0) {
    if (!node) return
    if (level > this.depth) {
      this.depth = level
      this.deepest = [node.value]
    } else if (level === this.depth) {
      this.deepest = this.deepest.concat(node.value)
    }
    this._getDeepestNodesAndDepth(node.left, level + 1)
    this._getDeepestNodesAndDepth(node.right, level + 1)
  }
}

module.exports = BinarySearchTree
