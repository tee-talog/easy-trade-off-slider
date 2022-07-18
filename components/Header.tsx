import clsx from 'clsx'
import { ComponentProps } from 'react'

type Props = ComponentProps<'header'>

const Header = ({ className }: Props) => (
  <header className={clsx(className, 'h-16 bg-green-200 drop-shadow px-4')}>
    <div className="max-w-5xl flex items-center h-full container mx-auto text-2xl">
      トレードオフスライダー
    </div>
  </header>
)

export default Header
