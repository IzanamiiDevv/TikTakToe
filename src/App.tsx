import { useState, useEffect } from 'react'
import './components/Menu'
import './assets/button.css'
import Menu from './components/Menu'
import Game from './components/Game'
import Choose from './components/ChooseSide'
export default function App() {

  const [isStart, setStart] = useState(false);
  const [goStart, makeStart] = useState(false);
  const [isMulti, setMulti] = useState(false);
  const [ palyer , setPlayer] = useState('X');
  


  return (
    isStart ? (goStart ? (<Game player={palyer}/>) : (<Choose goStart={makeStart} goBack={setStart} setPlayer={setPlayer}/>)) : (
      isMulti ? (
        <Game player={palyer}/>
      ) : (
        <Menu goStart={setStart} goMulti={setMulti}/>
      )
    )
  );
}
