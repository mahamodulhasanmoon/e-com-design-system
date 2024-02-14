import './App.css'
import {Button,Color,Margin,Padding,Select} from '@d.labs/ui/lib'

export default function App() {

  const colorOptions = [
    {label:'red', value:'red'},
    {label:'green', value:'green'},
    {label:'yellow', value:'yellow'}
  ]

  return (
    <div>
      <h1>Design System Theory</h1>
      <Button title='Hello Component' onClick={()=>alert('hello')}>Click Me</Button>
      <Padding space='xl' left>
      <Color hexCode='#00dd00' height='xl' width='xl'></Color>
      </Padding>
     
      <Margin space='xl' top left>

      {/* <Text size='xxl'>Hello World</Text> */}
      <Select
       label='Select A color '
       options={colorOptions}
       />
      </Margin>
    </div>
  )
}
