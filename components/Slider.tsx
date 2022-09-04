import clsx from 'clsx'
import React, {
  ComponentProps,
  createRef,
  MouseEventHandler,
  RefObject,
  useRef,
} from 'react'

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
  onValueChange: (value: number) => void
}

const Slider = ({
  value,
  onIncrement,
  onDecrement,
  onValueChange,
  className,
}: Props) => {
  // ドラッグ処理
  const currentValue = useRef(value)
  const onDragStart: MouseEventHandler<HTMLSpanElement> = (ev) => {
    ev.preventDefault()

    window.addEventListener('mouseup', onDragEnd)
    window.addEventListener('mousemove', onMouseMove)
  }

  const onMouseMove = (ev: MouseEvent) => {
    const mouseX = ev.clientX
    const blockPositions = refs.current
      .map((e) => e.current?.getBoundingClientRect() ?? { left: 0, right: 0 })
      .filter((e): e is { left: number; right: number } => !!e)

    const newValue = calcValue(mouseX, blockPositions)
    if (newValue !== currentValue.current) {
      currentValue.current = newValue
      onValueChange(newValue)
    }
  }

  const onDragEnd = (ev: MouseEvent) => {
    window.removeEventListener('mouseup', onDragEnd)
    window.removeEventListener('mousemove', onMouseMove)
  }

  // 位置を px で受け取って、どの値になるかを計算する
  const calcValue = (
    mouseX: number,
    blockPositions: { left: number; right: number }[]
  ): number => {
    const index = blockPositions.findIndex(
      ({ left, right }) => left < mouseX && right >= mouseX
    )
    if (index === -1) {
      return blockPositions[0].left > mouseX ? 1 : blockPositions.length
    }
    return index + 1
  }

  // 各ブロックの ref を格納する ref
  const refs = useRef<RefObject<HTMLDivElement>[]>([])
  ;[...Array(4).keys()].forEach((i) => {
    refs.current[i] = createRef<HTMLDivElement>()
  })

  // スライダーの値の各エリア
  const blocks = [...Array(4).keys()].map((i) => (
    <div
      className="flex items-center w-full relative"
      key={i}
      ref={refs.current[i]}
    >
      <span className="bg-neutral-300 h-1 w-full"></span>
      {value - 1 === i && (
        <span
          className="absolute bg-neutral-500 rounded-full h-4 w-4 left-1/2 -translate-x-1/2 cursor-pointer"
          onMouseDown={onDragStart}
        ></span>
      )}
    </div>
  ))

  return (
    <div className={clsx(className, 'flex relative')}>
      <MemoLeftButton onClick={onDecrement} />
      <div className="flex justify-between w-full h-full">{blocks}</div>
      <MemoRightButton onClick={onIncrement} />
    </div>
  )
}

export default React.memo(Slider)
