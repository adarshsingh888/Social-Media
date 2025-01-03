import React from 'react'
import PostShear from './PostShear';
import PostBody from './PostBody';
function PostSide() {
  return (
<div className="h-screen w-full flex flex-col overflow-y-scroll border hide-scrollbar">

    <PostShear />
    <PostBody />
  
</div>


  )
}

export default PostSide;