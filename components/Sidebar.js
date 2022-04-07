import React from 'react'
import Image from 'next/image'
import logo from '../assets/logo.PNG'
import { MdDashboard, MdPeopleOutline, MdCalendarToday, MdInsertChartOutlined} from 'react-icons/md'

const Sidebar = () => {
  return (
        <aside className="bg-slate-800 h-full w-40 flex-col flex shadow-lg items-center fixed">
               <div className="flex absolute items-center pr-2 pt-3 cursor-pointer">
                        <div className="w-8">
                                <Image src={logo} width={40} height={28}/>
                        </div>
                        <div className= "font-mono font-bold text-slate-200 text-xl pt-2 pb-3 font-[Helvetica] opacity-100">
                                FlyinTasks                     
                        </div>                              
                </div>
                <div className="flex flex-col w-full h-full justify-center space-y-14">
                        <div className="flex h-20 w-30 items-center justify-center">
                                <div className='flex flex-col leading-3 w-28 items-center text-sm text-slate-200 font-mono font-bold font-[Helvetica] cursor-pointer rounded-xl hover:bg-slate-200 hover:text-slate-800 hover:ease-linear hover:duration-200 py-2'>
                                        <MdPeopleOutline size={33}/>
                                        <div>
                                                Mangage        
                                        </div> 
                                </div>        
                        </div>
                        <div className="flex h-20 w-30 items-center justify-center">
                                <div className='flex flex-col w-28 items-center text-sm text-slate-200 font-bold font-mono font-[Helvetica] cursor-pointer rounded-xl hover:bg-slate-200 hover:text-slate-800 hover:ease-linear hover:duration-200 py-2'>
                                        <MdDashboard size={33}/>
                                        <div >
                                                Boards        
                                        </div> 
                                </div>        
                        </div>  
                        <div className="flex h-20 w-30 items-center justify-center">
                                <div className='flex leading-6 flex-col w-28 items-center text-sm text-slate-200 font-mono font-bold font-[Helvetica] cursor-pointer rounded-xl hover:bg-slate-200 hover:text-slate-800 hover:ease-linear hover:duration-200 py-2'>
                                        <MdCalendarToday size={31}/>
                                        <div >
                                                Schedule        
                                        </div> 
                                </div>        
                        </div>     
                        <div className="flex h-20 w-30 items-center justify-center">
                                <div className='flex w-28 flex-col items-center text-sm text-slate-200 font-mono font-bold font-[Helvetica] cursor-pointer rounded-xl hover:bg-slate-200 hover:text-slate-800 hover:ease-linear hover:duration-200 py-2'>
                                        <MdInsertChartOutlined size={33}/>
                                        <div >
                                                Report        
                                        </div> 
                                </div>        
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