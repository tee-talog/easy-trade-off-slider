import { ComponentProps } from 'react'
import useSliderItems from '../hooks/useSliderItems'
import Rows from './Rows'

type Props = ComponentProps<'div'>

const Sliders = ({ className }: Props) => {
  const { items, onIncrementWithIndex, onDecrementWithIndex } = useSliderItems()

  const headerItems = items.map((_, i) => <li key={i}>{i + 1}</li>)

  return (
    <div className={className}>
      <div className="flex gap-4">
        <ul className="flex justify-between basis-3/5 px-16">{headerItems}</ul>
      </div>

      <Rows
        items={items}
        onIncrementWithIndex={onIncrementWithIndex}
        onDecrementWithIndex={onDecrementWithIndex}
      />
    </div>
  )
}

export default Sliders
