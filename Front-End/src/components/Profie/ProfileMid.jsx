import React from 'react'
import ProfileCard from '../ProfileSide/ProfileCard';
import PostSide from '../PostSide/PostSide.jsx';
import PostBody from '../PostSide/PostBody.jsx';
import PostShare from '../PostSide/PostShear.jsx';
function ProfileMid() {
  return (
    <div className='h-screen w-full flex flex-col overflow-y-scroll border hide-scrollbar'>
      <ProfileCard />
      <PostShare/>
      <PostBody />
    </div>
  )
}

export default ProfileMid