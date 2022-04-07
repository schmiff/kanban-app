import React from 'react'
import Sidebar from './Sidebar'
import Headerbar from './Headerbar'
import Boards from './Boards'

const Layout = () => {
  return (
        <div className="bg-slate-700 h-screen w-full relative flex overflow-hidden">
                <Sidebar/>
                <div className="flex flex-col h-full w-full">
                        <Headerbar />
                        <Boards/>
                </div>
                

                
                
        </div>
    
  )
}

export default Layout