import React from 'react'
import Sidebar from './Sidebar'
import Headerbar from './Headerbar'

const Layout = () => {
  return (
        <div className="bg-slate-700 h-screen w-full relative flex overflow-hidden ">
                <Sidebar/>
                <Headerbar />
        </div>
    
  )
}

export default Layout