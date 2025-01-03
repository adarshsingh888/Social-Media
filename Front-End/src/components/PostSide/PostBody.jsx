import React from 'react'
import Post from './Post';
import { PostData } from '../../../public/assets/PostData'
function PostBody() {
  return (
    <div>
         {PostData.map((postData, id) => {
            return (
             <Post id={id} postData={postData}/>
            );
         })}

    </div>
  )
}

export default PostBody;