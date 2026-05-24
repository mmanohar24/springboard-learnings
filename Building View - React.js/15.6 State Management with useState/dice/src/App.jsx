import Dice from './Dice'
import ColoredCircles from "./ColoredButton_Copy/ColoredCircles"
import './App.css'

function App() {

  return (
    <div className='App'>

      <Dice numDice={4} />

      <Dice numDice={6} maxVal={10} title='Roll Me' />

      <ColoredCircles />

    </div>
  )

}

export default App
