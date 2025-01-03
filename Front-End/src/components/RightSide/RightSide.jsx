import React ,{useState}from 'react'
import Navbar from './Navbar'
import Trend from './Trend'
import ShareModel from './ShareModel'
function RightSide() {
  const [modelOpened,setModelOpened]=useState(false);
  return (
    <div className='flex flex-col '>
          <Navbar/>
          <Trend/>

          <div className='flex justify-center' >
            <button className='bg-yellow-300 text-black flex-grow m-4 px-2 h-10 border border-black rounded-full'
              onClick={()=>setModelOpened(true)}
            >
              Share
            </button>
          </div>
          <ShareModel modelOpened={modelOpened} setModelOpened={setModelOpened}/>
    </div>
  )
}

export default RightSide;