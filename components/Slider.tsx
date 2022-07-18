import React from 'react'

// TODO I/F なので export すべき
type Props = {
  value: number
  onIncrement: React.MouseEventHandler<HTMLButtonElement>
  onDecrement: React.MouseEventHandler<HTMLButtonElement>
}

const Slider = ({ value, onIncrement, onDecrement }: Props) => (
  <div>
    <button onClick={onDecrement}>&lt;</button>
    --{value}--
    <button onClick={onIncrement}>&gt;</button>
  </div>
)

export default React.memo(Slider)
