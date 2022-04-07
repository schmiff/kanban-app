import React from 'react'
import Image from 'next/image'
import R from '../assets/R.png'
const Headerbar = () => {
  return (
    <header className="flex w-full flex items-center justify-end h-16 bg-slate-800 text-right shadow-md">
        <div className="flex items-center pt-1 ">
                <div className='flex text-slate-200 h-16 cursor-pointer rounded-bl-2xl hover:bg-slate-200 hover:text-slate-800 hover:ease-linear hover:duration-200 py-3 pr-3'>
                        <div className="flex px-3 font-[Helvetica] leading-tight text-left leading-4 pt-1">
                                <div>
                                        <div className="font-bold font-mono tracking-tighter">
                                                Jules  
                                        </div>
                                        <div className="font-bold font-mono tracking-tighter">
                                                Vaughn  
                                        </div>
                                </div>  
                        </div>
                        <div className="flex flex-wrap rounded-full h-10 w-10 shadow-sm select-none border-2 border-blue-400">
                                <Image className="rounded-full" src={R}/>
                        </div>
                </div>
                
        </div>
                
    </header>
  )
}

export default Headerbar