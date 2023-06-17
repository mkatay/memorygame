import React,{useRef} from 'react'
import { categories } from '../data'
import { selectedEmojis } from '../data'


export const MyForm = ({setGameState,setEmojis}) => {
  
    const sizeRef=useRef(null)
    const categRef=useRef(null)
    
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!sizeRef.current.value || categRef.current.value=='0') return
    setEmojis([])
    setGameState({
      running:false,
      won:false,
      size:sizeRef.current.value,
      category:categRef.current.value,
      remaining:sizeRef.current.value**2/2,
      score:0})
    setEmojis(selectedEmojis(categRef.current.value,sizeRef.current.value))
    sizeRef.current.value=''
    categRef.current.value='0'
  }
  return (
    <div>
      <form className='flex flex-wrap justify-center items-center' onSubmit={handleSubmit}>
        <div className="mb-6 mr-1">
            <label htmlFor="size"className="block mb-2 ">Game size (2|4|6|8|10) </label>
            <input ref={sizeRef} type="text" id="size" className=" rd-lg p-3 " placeholder="square grid size" pattern="^(2|4|6|8|10)$"/>
        </div>
        <div className="mb-6 mr-1">
            <label htmlFor="category" className="block mb-2 ">Select category</label>
            <select ref={categRef} id="category" className="rd-lg   p-3 ">
                <option value="0">category...</option>
                {categories().map(ctg=>
                     <option key={ctg} value={ctg}>{ctg}</option>
                    )}
               
            </select>
        </div>
        <button type="submit" className="mx-2 mt-1 block bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 rd-lg ">Start game</button>

      </form>
    </div>
  )
}


