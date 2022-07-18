import Label from './Label'
import Slider from './Slider'

type Props = {
  label: string
  value: number
}

const Row = ({ label, value }: Props) => (
  <li className="flex">
    <Slider value={value} />
    <Label>{label}</Label>
  </li>
)

export default Row
