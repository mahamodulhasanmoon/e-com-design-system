import './App.css'
import {Button,Color,Margin,Text} from '@d.labs/ui/lib'

export default function App() {
  return (
    <div>
      <h1>Design System Theory</h1>
      <Button title='Hello Component' onClick={()=>alert('hello')}>Click Me</Button>
      <Color hexCode='#00dd00' height='xl' width='xl'></Color>
      <Margin space='xl' top left>

      <Text size='xxl'>Hello World</Text>
      </Margin>
    </div>
  )
}
