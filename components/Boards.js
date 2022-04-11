import React, { useState } from 'react'
import { MdExpandMore, MdExpandLess, MdMoreVert } from 'react-icons/md'

const Boards = (data) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="h-full pb-4 transition-all ease-linear delay-100 duration-200" style={!isOpen ? {height: 80}: {height: 680}}>
      <div className="pl-10 pt-10 pb-2 flex items-center">
        <div className="text-slate-200  select-none font-mono font-bold font-[Helvetica] text-4xl pr-3 tracking-tight">
          {data.name}
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
      <div className="bg-slate-600 bg-opacity-20 px-10 overflow-hidden transition-all ease-linear delay-100 duration-200" style={isOpen ? { height: 600 + "px" }: {height: 0 + "px"}}>
        {/* Board Columns */}
        <div className=" opacity-100 pb-4 rounded-md grid grid-cols-4 gap-5 justify-between pt-4 h-full  ">
          <div className="pb-1 flex flex-col bg-slate-800 text-slate-200 font-mono text-xl rounded-b-xl rounded-md shadow-md">
            <span className="flex w-full h-1  bg-gradient-to-r from-violet-500 to-indigo-600 rounded-t-md overflow-auto"></span>
            <div  className="px-3 py-3">
              <div className="pb-3 select-none">
                Backlog
              </div>
              {/* Tasks Card Area ------------------------------- */}
              <div className="flex items-center bg-slate-600 rounded-sm">
                <div className="bg-slate-700">

                </div>
              </div>
              {/* Tasks Card Area ------------------------------- */}
            </div>
          </div>
          <div className="flex flex-col bg-slate-800 text-slate-200 font-mono  text-xl rounded-md shadow-md ">
            <span className="flex w-full h-1  bg-gradient-to-r from-violet-500 to-indigo-600 overflow-hidden rounded-t-md"></span>
            <div  className="px-3 py-2">
              <div className="pb-2 select-none">
                In Progress
              </div>
              {/* Tasks Card Area ------------------------------- */}
              <div className="flex items-center bg-slate-600 rounded-sm">

              </div>
              {/* Tasks Card Area ------------------------------- */}
            </div>
          </div>
          <div className="flex flex-col bg-slate-800 text-slate-200 font-mono  text-xl rounded-md shadow-md ">
            <span className="flex w-full h-1  bg-gradient-to-r from-violet-500 to-indigo-600 overflow-hidden rounded-t-md"></span>
            <div  className="px-3 py-2">
              <div className="pb-2 select-none">
                In Review
              </div>
              {/* Tasks Card Area ------------------------------- */}
              <div className="flex items-center bg-slate-600 rounded-sm">

              </div>
              {/* Tasks Card Area ------------------------------- */}
            </div>
          </div>
          <div className="flex flex-col bg-slate-800 text-slate-200 font-mono  text-xl rounded-md shadow-md ">
            <span className="flex w-full h-1  bg-gradient-to-r from-violet-500 to-indigo-600 overflow-hidden rounded-t-md"></span>
            <div  className="px-3 py-2">
              <div className="pb-2 select-none">
                Completed
              </div>
              {/* Tasks Card Area ------------------------------- */}
              <div className="flex items-center bg-slate-600 rounded-sm">

              </div>
              {/* Tasks Card Area ------------------------------- */}
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Boards