import React from 'react'

const Headerbar = () => {
  return (
    <header className="flex w-full flex items-center justify-end h-16 bg-slate-800 text-right shadow-md">
        <div className="flex items-center px-10 pt-1">
                <div className="text-slate-200 flex px-5 font-[Helvetica] leading-tight">
                        <div>
                                <div className="font-bold text-md">
                                        First Second    
                                </div>
                                <div className="text-sm font-light">
                                        Title
                                </div>
                        </div>  
                </div>
                <div className="h-11 w-11 rounded-full shadow-sm cursor-pointer bg-gray-200 border-2 border-blue-300">

                </div>
        </div>
                
    </header>
  )
}

export default Headerbar