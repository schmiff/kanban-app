import React from 'react'
import Image from 'next/image'
import logo from '../assets/logo.PNG'

const Sidebar = () => {
  return (
        <aside className="bg-slate-800 h-full w-48 flex-col flex shadow-md static">
               <div className="flex pl-1 pt-3 absolute items-center">
                        <div className="">
                                <Image src={logo} width={48} height={32}/>
                        </div>
                        <div className= "font-bold text-slate-200 text-xl pt-2 pb-3 font-[Helvetica] opacity-100">
                                FlyingNotes                      
                        </div>                              
                </div>   
       </aside> 
  )
}
export default Sidebar

/*

<div className="w-60 h-full shadow-md bg-slate-900 shadow-lg absolute left-0 text-center opacity-90">
                <div className="flex pl-3 pt-4 h-50 items-center"  >
                        <div className="pb-1 opacity-100">
                                <Image src={logo} width={50} height={32}/>
                        </div>
                        <div className= "font-bold text-slate-200 text-2xl pt-2 pl-1 pb-3 font-[Helvetica] opacity-100">
                                FlyingNotes                
                        </div>      
                </div>     
        </div>
*/