import './App.css'
import {Button,Color,Margin,Padding,Text} from '@d.labs/ui/lib'

export default function App() {
  return (
    <div>
      <h1>Design System Theory</h1>
      <Button title='Hello Component' onClick={()=>alert('hello')}>Click Me</Button>
      <Padding space='xxxl' left>
      <Color hexCode='#00dd00' height='xl' width='xl'></Color>
      </Padding>
     
      <Margin space='xl' top left>

      <Text size='xxl'>Hello World</Text>
      </Margin>
    </div>
  )
}
