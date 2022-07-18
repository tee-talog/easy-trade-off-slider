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
  <li className="flex gap-4 text-xl leading-normal">
    <Slider
      value={value}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      className="basis-3/5"
    />
    <Label className="basis-2/5">{label}</Label>
  </li>
)

export default React.memo(Row)
