import { useState } from 'react'

const useSliderItems = () => {
  const [items, setItems] = useState([
    { label: 'スコープ', value: 1 },
    { label: '予算', value: 2 },
    { label: '時間', value: 3 },
    { label: '品質', value: 4 },
  ])

  const onIncrementWithIndex = (index: number) => {
    setItems((items) => {
      const oldValue = items[index].value
      const newValue = oldValue + 1

      if (!isValidValue(newValue)) {
        return items
      }

      return items.map((e, i) => {
        // 値の更新
        if (i === index) {
          return { ...e, value: newValue }
        }
        // 値の入れ替え
        if (e.value === newValue) {
          return { ...e, value: oldValue }
        }
        return e
      })
    })
  }

  const onDecrementWithIndex = (index: number) => {
    setItems((items) => {
      const oldValue = items[index].value
      const newValue = oldValue - 1

      if (!isValidValue(newValue)) {
        return items
      }

      return items.map((e, i) => {
        // 値の更新
        if (i === index) {
          return { ...e, value: newValue }
        }
        // 値の入れ替え
        if (e.value === newValue) {
          return { ...e, value: oldValue }
        }
        return e
      })
    })
  }

  const onValueChangeWithIndex = (index: number) => (value: number) => {
    setItems((items) => {
      const oldValue = items[index].value

      if (!isValidValue(value)) {
        return items
      }

      return items.map((e, i) => {
        // 値の更新
        if (i === index) {
          return { ...e, value }
        }
        // 値の入れ替え
        if (e.value === value) {
          return { ...e, value: oldValue }
        }
        return e
      })
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
    onValueChangeWithIndex,
  }
}

export default useSliderItems
