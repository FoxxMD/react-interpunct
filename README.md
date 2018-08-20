# react-interpunct

> React component to visibly display whitespace characters

[![NPM](https://img.shields.io/npm/v/react-interpunct.svg)](https://www.npmjs.com/package/react-interpunct) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-interpunct
```

## Usage

```jsx
import React, { Component } from 'react'

import Interpunct from 'react-interpunct'

class Example extends Component {
  render () {
    return (
      <Interpunct>Your text with  spaces here  </Interpunct>
    )
  }
}
```
Outputs
```
Your·text·with··spaces·here··
```

## Props

| Property            | Type               | Default                               | Description                                                                                                                                                                   |
|:--------------------|:-------------------|:--------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `children`          | string             | undefined                             | Text to be rendered with Interpunct                                                                                                                                           |
| `matchLength`       | integer            | 1                                     | Number of consecutive whitespace characters to match before replacing                                                                                                         |
| `replacementString` | string             | [· (middle dot)](http://middot.net/)  | String used to replace whitespace characters                                                                                                                                  |
| `respectLength`     | bool               | `true`                                | When `true` the string given for `replacementString` will be repeated to the length of the matched whitespace. When `false` `replacementString` will replace the entire match |
| `enable`            | bool               | `true`                                | If set to `false` then `children` will be returned without manipulation                                                                                                       |

## License

MIT © [FoxxMD](https://github.com/FoxxMD)
