import React from 'react'
import Sidebar from './Sidebar'
import Headerbar from './Headerbar'
import Boards from './Boards'
import Content from './Content'

const Layout = () => {
  return (
        <div className="relative h-full flex pb-20 bg-slate-700">
                <Sidebar/>
                <div className="flex flex-col h-full w-full">
                        <Headerbar />
                        <Content />
                </div>
                

                
                
        </div>
    
  )
}

export default Layout