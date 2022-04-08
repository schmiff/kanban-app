import React, { useState } from 'react'
import { MdExpandMore, MdExpandLess, MdMoreVert } from 'react-icons/md'

const Boards = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="h-full transition-all ease-in-out duration-150" style={!isOpen ? {height: 80}: {height: 480}}>
      <div className="pl-10 pt-10 pb-2 flex items-center">
        <div className="text-slate-200 select-none font-mono font-bold font-[Helvetica] text-4xl pr-3 tracking-tight">
          StudioBoard
        </div>
        <div className="pt-1">
          <div className="flex justify-center select-none items-center rounded-full h-7 w-7 bg-slate-800 text-slate-200 shadow-md cursor-pointer hover:outline hover:ease-in-out hover:duration-100" onClick={() => setIsOpen(!isOpen)}>    
              {/*Expand and Collapse Board Tasks Logic*/}
              {isOpen && <MdExpandMore size={26}/>}
              {!isOpen && 
              <MdExpandLess size={26}
              />}
          </div>
        </div>
      </div>
    {/* Board Expand and Collapse Logic + Styling */}
      <div className="overflow-hidden transition-all ease-in-out duration-150" style={isOpen ? { height: 400 + "px" }: {height: 1 + "px"}}>
        {/* Board Columns */}
        <div className="grid grid-cols-4 gap-5 justify-between px-10 pt-2 h-full">
          <div className="items-center bg-slate-800 text-slate-200 font-mono px-3 py-2 text-xl rounded-md shadow-md">
            <div className="pb-2">
              Backlog
            </div>
            <div className="flex items-center bg-slate-600 rounded-sm">
            <label className="px-1 text-sm">
              Low Prio
            </label>
            </div>
          </div>
          <div className="bg-slate-800 text-slate-200 font-mono px-3 py-2 text-xl rounded-md shadow-md">
            In Progress
          </div>
          <div className="bg-slate-800 text-slate-200 font-mono px-3 py-2 text-xl rounded-md shadow-md">
            In Review
          </div>
          <div className="bg-slate-800 text-slate-200 font-mono px-3 py-2 text-xl rounded-md shadow-md">
            Completed
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Boards