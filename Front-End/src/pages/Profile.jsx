import React from 'react'
import ProfileLeft from '../components/Profie/ProfileLeft'
import ProfileMid from '../components/Profie/ProfileMid'
import ProfileRight from '../components/Profie/ProfileRight'

function Profile() {
  return (
    <div className=' grid grid-cols-7  grid-flow-col gap-4  rounded-md '>
      <div className='  col-span-2  '>
        <ProfileLeft />
      </div>
      <div className=' col-span-3'>
        <ProfileMid />
      </div>
      <div className='  col-span-2'>
        <ProfileRight />
      </div>
    </div>
  )
}

export default Profile