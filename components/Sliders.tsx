import useSliderItems from '../hooks/useSliderItems'
import Rows from './Rows'

const Sliders = () => {
  const { items, onIncrementWithIndex, onDecrementWithIndex } = useSliderItems()

  const headerItems = items.map((_, i) => <li key={i}>{i + 1}</li>)

  return (
    <div>
      <ul className="flex">{headerItems}</ul>

      <Rows
        items={items}
        onIncrementWithIndex={onIncrementWithIndex}
        onDecrementWithIndex={onDecrementWithIndex}
      />
    </div>
  )
}

export default Sliders
