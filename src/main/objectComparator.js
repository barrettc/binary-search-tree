/**
 * Implement a custom comparator. As an example, maybe you need to compare objects on the key "foobar" with the shape:
 * {
 *   id: '123',
 *   some: 'key',
 *   sales: [1, 2, 3]
 *   foobar: 45
 * }
 * This is making the assumption that the foobar key always exists
 */
const objectComparator = (a, b) => {
  if (a.foobar < b.foobar) {
    return 'LESS_THAN'
  }
  if (a.foobar > b.foobar) {
    return 'GREATER_THAN'
  }
  return 'EQUAL'
}

module.exports = objectComparator
