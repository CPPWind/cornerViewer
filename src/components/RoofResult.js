import React from 'react'

const RoofResult = ({ roof }) => {
  const results = roof.expected.map((props) => {
    const { orig, dest, order, key, result } = props
    return (
      <li key={key}>
        <span className={orig.theme}>⬤</span>
        <span className={dest.theme}>⬤</span>
        <span>{result}</span>
      </li>
    )
  })

  return (
    <ul className={"results"}>
      {results}
    </ul>
  )
}

export default RoofResult
