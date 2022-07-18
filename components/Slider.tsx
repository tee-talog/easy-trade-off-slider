import React from 'react'

type Props = {
  value: number
}

const Slider = ({ value }: Props) => <div>&lt;--{value}--&gt;</div>

export default React.memo(Slider)
