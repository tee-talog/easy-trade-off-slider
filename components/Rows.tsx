import React, { useCallback } from 'react'
import Row from './Row'

type Item = {
  label: string
  value: number
}

type Props = {
  items: Item[]
  onIncrementWithIndex: (index: number) => void
  onDecrementWithIndex: (index: number) => void
}

const Rows = ({ items, onIncrementWithIndex, onDecrementWithIndex }: Props) => {
  const memoOnIncrementWithIndex = (index: number) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useCallback(() => {
      onIncrementWithIndex(index)
    }, [index])

  const memoOnDecrementWithIndex = (index: number) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useCallback(() => {
      onDecrementWithIndex(index)
    }, [index])

  const domItems = items.map(({ label, value }, i) => (
    <Row
      key={i}
      label={label}
      value={value}
      onIncrement={memoOnIncrementWithIndex(i)}
      onDecrement={memoOnDecrementWithIndex(i)}
    />
  ))
  return <ul>{domItems}</ul>
}

export default React.memo(Rows)
