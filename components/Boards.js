import React, { useState } from 'react'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'

const Boards = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="h-full pl-40">
      <div className="pl-10 pt-10 pb-2 flex items-center">
        <div className="text-slate-200 select-none font-mono font-bold font-[Helvetica] text-4xl pr-3 tracking-tight">
          StudioBoard
        </div>
        <div className="pt-1">
          <div className="flex justify-center select-none items-center rounded-full h-7 w-7 bg-slate-800 text-slate-200 shadow-md cursor-pointer hover:outline hover:ease-linear hover:duration-75" onClick={() => setIsOpen(!isOpen)}>    
              {/*Expand and Collapse Board Tasks Logic*/}
              {isOpen && <MdExpandMore size={23}/>}
              {!isOpen && 
              <MdExpandLess size={23}
              
              />}
          </div>
        </div>
        

      </div>
      
            
    </div>
  )
}

export default Boards