import React from 'react';
import { useState } from 'react';

export const Board = ({ emojis,setEmojis,gameState,setGameState }) => {
  const [previous,setPrevious]=useState(null)

  const containerStyle={
    gridTemplateColumns:`repeat(${gameState.size},auto)`
  }
  // style={{ gridRow: `${Math.floor(i / size) + 1}`, gridColumn:`${(i % size) + 1}`}}
console.log(emojis);
console.log('previous:', previous);

const showHide=(obj)=>{
  [obj.children[0],obj.children[1]].forEach(el=>{
    el.classList.toggle('hidden')
    el.classList.toggle('flex')
  })
}

const handleClick = (e,emojiObj) => {
  const id=emojiObj.id
  if(gameState.running) return
  setGameState({...gameState,score:gameState.score+1})
  const parent=e.target.parentNode;
  showHide(parent)
  if (previous) {
    if (emojiObj.emoji == previous.children[0].innerHTML) {
      setEmojis(emojis.map(obj=>obj.id==id?{...obj,disabled:true}:obj));
      setGameState({...gameState,remaining: gameState.remaining-1});
      setPrevious(null)
     if(gameState.remaining==0) setGameState({...gameState,won:true})
    } else {
        setGameState({...gameState,running:true})
        setTimeout(()=>{
        setGameState({...gameState,running:false})
        showHide(parent)
        showHide(previous)
        setEmojis(emojis.map(obj=>(obj.id==id||obj.id==previous.id) ?{...obj,disabled:false}:obj));
        setPrevious(null)
      }, 500)
    }
  } else {
      setPrevious(parent)
      setEmojis(emojis.map(obj=>obj.id==id?{...obj,disabled:true}:obj));//ne lehessen újra rá kattintani
  }
}
  return (
   <div>
    <div className=" mx-auto grid  gap-1 p-2 justify-center border" style={containerStyle}>
      {emojis.map(obj => 
        <div key={obj.id} id={obj.id}  onClick={(e)=>obj.disabled? null :  handleClick(e,obj)} className="b b-blue-700 rd-2">

          <div  className={`hidden ${gameState.size==2 ? 's2' : (gameState.size==4? 's4' : 'sSmall')}`}>
              {obj.emoji}
            </div>

            <div className={`flex ${gameState.size==2 ? 's2' : (gameState.size==4? 's4' : 'sSmall')}`}>
            ?
            </div>
        </div>
          
      )}
    </div>
      
    </div>
  );
};
