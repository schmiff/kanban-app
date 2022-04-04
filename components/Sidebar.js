import React from 'react'
import Image from 'next/image'
import logo from '../assets/logo.PNG'

const Sidebar = () => {
  return (
        <div className="w-60 h-full shadow-md bg-slate-900 shadow-lg px-1 absolute left-0 text-center opacity-90">
                <div className="flex pl-3 pt-4 h-50 items-center"  >
                        <div className="pb-1 opacity-100">
                                <Image src={logo} width={50} height={35}/>
                        </div>
                        <div className="text-slate-200 text-2xl pt-2 pl-2 pb-4 font-[Poppins] opacity-100">
                                Flying Notes                
                         </div>      
                </div>
        
                
        </div>
  )
}

export default Sidebar