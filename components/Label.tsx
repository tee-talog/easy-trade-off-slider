import { ComponentProps } from 'react'

type Props = ComponentProps<'div'>

const Label = ({ children }: Props) => <div>{children}</div>

export default Label
