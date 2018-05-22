import React from 'react'
import _differenceBy from 'lodash/differenceBy'

const RoofResult = ({ roof }) => {
  const results = roof.expected.map((props) => {
    const { orig, dest, key, result, resultTheme } = props
    return (
      <li key={key}>
        <span className={orig.theme}>{orig.id}</span>
        <span>+</span>
        <span className={dest.theme}>{dest.id}</span>
        <span className={resultTheme}>{result}</span>
      </li>
    )
  })

  const missing = _differenceBy(roof.walls, roof.expected,'id')
  const walls = missing.map(w => {
    return (<li key={w.key}>
      <span className={w.orig.theme}>{w.orig.id}</span>
      <span>+</span>
      <span className={w.dest.theme}>{w.dest.id}</span>
      <span className={'warning'}>!</span>
    </li>)
  })

  return (
    <ul className={'results'}>
      {results}
      {walls}
    </ul>
  )
}

export default RoofResult
