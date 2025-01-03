import React from 'react'
import InfoCard from './InfoCard'
import LogoSearch from '../ProfileSide/LogoSearch'
import Follower from '../ProfileSide/Follower'
function ProfileLeft() {
  return (
    <div className='h-screen p-4 '>
        <LogoSearch/>
         <InfoCard/>
         <Follower/>
        
    </div>
  )
}

export default ProfileLeft