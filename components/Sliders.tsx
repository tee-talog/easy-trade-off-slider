import Rows from './Rows'

const Sliders = () => {
  const items = [
    { label: 'スコープ', value: 1 },
    { label: '予算', value: 2 },
    { label: '時間', value: 3 },
    { label: '品質', value: 4 },
  ]

  const headerItems = items.map((_, i) => <li key={i}>{i + 1}</li>)

  return (
    <div>
      <ul className="flex">{headerItems}</ul>

      <Rows items={items} />
    </div>
  )
}

export default Sliders
