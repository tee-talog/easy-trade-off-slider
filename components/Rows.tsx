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
  onValueChangeWithIndex: (index: number) => (value: number) => void
}

const Rows = ({
  items,
  onIncrementWithIndex,
  onDecrementWithIndex,
  onValueChangeWithIndex,
}: Props) => {
  const domItems = items.map(({ label, value }, i) => (
    <Row
      key={i}
      label={label}
      value={value}
      onIncrement={() => onIncrementWithIndex(i)}
      onDecrement={() => onDecrementWithIndex(i)}
      onValueChange={(value) => {
        onValueChangeWithIndex(i)(value)
      }}
    />
  ))

  return <ul className="flex flex-col gap-3">{domItems}</ul>
}

export default React.memo(Rows)
