import React from 'react'
import Row from './Row'

type Item = {
  label: string
  value: number
}

type Props = {
  items: Item[]
}

const Rows = ({ items }: Props) => {
  const domItems = items.map(({ label, value }, i) => (
    <Row key={i} label={label} value={value} />
  ))
  return <ul>{domItems}</ul>
}

export default React.memo(Rows)
