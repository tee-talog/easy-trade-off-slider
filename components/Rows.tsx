import React from 'react'
import Row from './Row'

const Rows = () => (
  <ul>
    <Row label={'スコープ'} value={1} />
  </ul>
)

export default React.memo(Rows)
