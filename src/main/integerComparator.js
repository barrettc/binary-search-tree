const integerComparator = (a, b) => {
  if (a < b) {
    return 'LESS_THAN'
  }
  if (a > b) {
    return 'GREATER_THAN'
  }
  return 'EQUAL'
}

module.exports = integerComparator
