import React from 'react'
import Label from './Label'
import Slider from './Slider'

type Props = {
  label: string
  value: number
  onIncrement: () => void
  onDecrement: () => void
}

const Row = ({ label, value, onIncrement, onDecrement }: Props) => (
  <li className="flex">
    <Slider value={value} onIncrement={onIncrement} onDecrement={onDecrement} />
    <Label>{label}</Label>
  </li>
)

export default React.memo(Row)
