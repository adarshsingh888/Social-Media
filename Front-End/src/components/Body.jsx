import React from 'react'
import PostSide from './PostSide/PostSide'
import ProfileSide from './ProfileSide/ProfileSide'
import RightSide from './RightSide/RightSide'
function Body() {
  return (
    <div className=' grid grid-cols-7  grid-flow-col gap-4  rounded-md '>
        <div className=' bg-green-200 col-span-2 rounded-md pb-4 '>
           <ProfileSide/>
        </div>
        <div className=' bg-green-200 col-span-3'>
           <PostSide/>
          </div>
          <div className=' bg-green-200 col-span-2'>
              <RightSide/>
          </div>
    </div>
  )
}

export default Body