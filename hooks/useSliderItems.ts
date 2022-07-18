import { useState } from 'react'

const useSliderItems = () => {
  const [items, setItems] = useState([
    { label: 'スコープ', value: 1 },
    { label: '予算', value: 2 },
    { label: '時間', value: 3 },
    { label: '品質', value: 4 },
  ])

  const onIncrementWithIndex = (index: number) => {
    // TODO 値の入れ替え
    setItems((items) => {
      if (!isValidValue(items[index].value + 1)) {
        return items
      }

      return items.map((e, i) =>
        i === index ? { ...e, value: e.value + 1 } : e
      )
    })
  }

  const onDecrementWithIndex = (index: number) => {
    // TODO 値の入れ替え
    setItems((items) => {
      if (!isValidValue(items[index].value - 1)) {
        return items
      }

      return items.map((e, i) =>
        i === index ? { ...e, value: e.value - 1 } : e
      )
    })
  }

  const isValidValue = (value: number) => {
    if (value >= 1 && value <= items.length) {
      return true
    }
    return false
  }

  return {
    items,
    onIncrementWithIndex,
    onDecrementWithIndex,
  }
}

export default useSliderItems
