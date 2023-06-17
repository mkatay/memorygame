import { useState } from 'react'
import { MyForm } from './components/MyForm'
import { Board } from './components/Board'
import { useEffect } from 'react'
import { InfoTable } from './components/InfoTable'

const initialState ={
  running:false,
  score:0,
  remaining:null,
  size:0,
  category:'',
  won:false
  
}

function App() {
  const [gameState,setGameState]=useState(initialState)
  const [emojis,setEmojis]=useState([])

 useEffect(()=>{
 setGameState(initialState)
},[gameState.won])

console.log('App:',gameState,emojis);

  return (
   <div className="app">
       <div className="flex-col items-center  max-w-[1200px] mx-auto ">
        <h1 className="h1">Memory game</h1>
        <MyForm setEmojis={setEmojis} setGameState={setGameState} gameState={gameState}/>
        {emojis.length>0 && <Board emojis={emojis} setEmojis={setEmojis} gameState={gameState} setGameState={setGameState}/>}
        {gameState.size && <InfoTable score={gameState.score} remaining={gameState.remaining} />}

    </div>
  </div>
  )
}

export default App
