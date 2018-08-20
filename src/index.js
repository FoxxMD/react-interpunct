import PropTypes from 'prop-types'
import React from 'react'

const Interpunct = ({ children, matchLength = 1, visible = true, replacementString = '•', repeatLength = true }) => {
  if (!visible) {
    return children
  }

  // https://stackoverflow.com/a/3758841/1469797
  // ([\s]{2,})
  const reg = new RegExp(`([\\s]{${matchLength},})`, 'g')

  return children.replace(reg, (match) => {
    if (repeatLength) {
      return replacementString.repeat(match.length)
    }
    return replacementString
  })
}

Interpunct.propTypes = {
  children: PropTypes.string,
  visible: PropTypes.bool,
  replacementChar: PropTypes.string,
  repeatLength: PropTypes.bool,
  matchLength: PropTypes.number
}

export default Interpunct
