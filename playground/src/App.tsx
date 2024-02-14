import './App.css'
import {Button, Color,Spacing} from '@d.labs/ui/lib'

export default function App() {
  return (
    <div>
      <h1>Design System Theory</h1>
      <Button title='Hello Component' onClick={()=>alert('hello')}>Click Me</Button>
      <Color height={Spacing.xxl} width={Spacing.xxl} hexCode='#00dd00'></Color>
    </div>
  )
}
