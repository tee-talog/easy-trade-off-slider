import clsx from 'clsx'
import { ComponentProps } from 'react'
import useSliderItems from '../hooks/useSliderItems'
import Rows from './Rows'

type Props = ComponentProps<'div'>

const Sliders = ({ className }: Props) => {
  const {
    items,
    onIncrementWithIndex,
    onDecrementWithIndex,
    onValueChangeWithIndex,
  } = useSliderItems()

  const headerItems = items.map((_, i) => (
    <li key={i} className="w-full text-center">
      {i + 1}
    </li>
  ))

  return (
    <div className={clsx(className, 'flex flex-col gap-4')}>
      <div className="flex gap-6">
        <ul className="flex justify-between basis-3/5 px-8">{headerItems}</ul>
      </div>

      <Rows
        items={items}
        onIncrementWithIndex={onIncrementWithIndex}
        onDecrementWithIndex={onDecrementWithIndex}
        onValueChangeWithIndex={onValueChangeWithIndex}
      />
    </div>
  )
}

export default Sliders
