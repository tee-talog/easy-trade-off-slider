import React from 'react'
import Row from './Row'

type Item = {
  label: string
  value: number
}

type Props = {
  items: Item[]
  onIncrementWithIndex: (
    index: number
  ) => React.MouseEventHandler<HTMLButtonElement>
  onDecrementWithIndex: (
    index: number
  ) => React.MouseEventHandler<HTMLButtonElement>
}

const Rows = ({ items, onIncrementWithIndex, onDecrementWithIndex }: Props) => {
  const domItems = items.map(({ label, value }, i) => (
    <Row
      key={i}
      label={label}
      value={value}
      onIncrement={onIncrementWithIndex(i)}
      onDecrement={onDecrementWithIndex(i)}
    />
  ))
  return <ul>{domItems}</ul>
}

export default React.memo(Rows)
