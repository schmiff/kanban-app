import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'

export default function Home(){
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-slate-700 font-[Helvetica]">
      <Sidebar />
      <div className="text-slate-200">Hello World</div>
    </div>
  )
}

