import clsx from 'clsx'
import React, { ComponentProps } from 'react'
import Label from './Label'
import Slider from './Slider'

type Props = ComponentProps<'li'> & {
  label: string
  value: number
  onIncrement: () => void
  onDecrement: () => void
  onValueChange: (value: number) => void
}

const Row = ({
  label,
  value,
  onIncrement,
  onDecrement,
  onValueChange,
  className,
}: Props) => (
  <li className={clsx(className, 'flex text-xl leading-normal gap-6')}>
    <Slider
      value={value}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      onValueChange={onValueChange}
      className="basis-3/5 flex-none"
    />
    <Label className="basis-2/5">{label}</Label>
  </li>
)

export default React.memo(Row)
