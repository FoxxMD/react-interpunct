import PropTypes from 'prop-types'
import React from 'react'

const Interpunct = ({ children, matchLength = 1, enable = true, replacementString = '·', respectLength = true }) => {
  if (!enable) {
    return children
  }
  if (typeof children !== 'string') {
    console.error('Value must be a string')
    return null
  }

  // https://stackoverflow.com/a/3758841/1469797
  // ([\s]{2,})
  const reg = new RegExp(`([\\s]{${matchLength},})`, 'g')

  return children.replace(reg, (match) => {
    if (respectLength) {
      return replacementString.repeat(match.length)
    }
    return replacementString
  })
}

Interpunct.propTypes = {
  children: PropTypes.string,
  enable: PropTypes.bool,
  replacementString: PropTypes.string,
  respectLength: PropTypes.bool,
  matchLength: PropTypes.number
}

export default Interpunct
