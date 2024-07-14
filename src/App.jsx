

import './App.css'
import { LimitedCounter } from './components/LimitedCounter'
import { PersistentCounter } from './components/PersistentCounter'
import { RealTimeClock } from './components/RealTimeClock'
import { TitleUpdater } from './components/TitleUpdater'
import { ToggleText } from './components/ToggleText'
import { WindowSize } from './components/WindowSize'

function App() {


  return (
   <div>
    <h1>Desafios Para treinar o react!</h1>
    <TitleUpdater></TitleUpdater>
    <br></br><br></br>
    <WindowSize></WindowSize>
    <br></br>
    <PersistentCounter></PersistentCounter>
    <br></br>
    <RealTimeClock></RealTimeClock>
    <br></br>
    <ToggleText></ToggleText>
    <LimitedCounter></LimitedCounter>
   </div>
  )
}

export default App
