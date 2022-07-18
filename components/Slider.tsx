import clsx from 'clsx'
import React, { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'button'>

// TODO SVG
const leftButtonStyle: React.CSSProperties = {
  clipPath: 'polygon(25% 50%, 100% 0, 100% 100%)',
}

// TODO SVG
const rightButtonStyle: React.CSSProperties = {
  clipPath: 'polygon(0 0, 0 100%, 75% 50%)',
}

const BaseButton =
  (style: React.CSSProperties) =>
  // eslint-disable-next-line react/display-name
  ({ onClick }: ButtonProps) =>
    (
      <button
        onClick={onClick}
        className="bg-neutral-300 w-8 h-8 focus:bg-neutral-500 focus:outline-none"
        style={style}
      ></button>
    )

const LeftButton = BaseButton(leftButtonStyle)
const MemoLeftButton = React.memo(LeftButton)

const RightButton = BaseButton(rightButtonStyle)
const MemoRightButton = React.memo(RightButton)

// TODO I/F なので export すべき
type Props = ComponentProps<'div'> & {
  value: number
  onIncrement: React.MouseEventHandler<HTMLButtonElement>
  onDecrement: React.MouseEventHandler<HTMLButtonElement>
}

const Slider = ({ value, onIncrement, onDecrement, className }: Props) => {
  const blocks = [...Array(4).keys()].map((i) => (
    <div key={i} className="w-full relative">
      <span className="bg-neutral-300 h-1 w-full absolute top-1/2 -translate-y-1/2"></span>
      {value === i + 1 && (
        <span className="absolute bg-neutral-500 rounded-full h-4 w-4 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"></span>
      )}
    </div>
  ))

  return (
    <div className={clsx(className, 'flex items-center')}>
      <MemoLeftButton onClick={onDecrement} />
      <div className="flex justify-between w-full">{blocks}</div>
      <MemoRightButton onClick={onIncrement} />
    </div>
  )
}

export default React.memo(Slider)
