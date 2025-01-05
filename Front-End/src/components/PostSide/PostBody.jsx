import React from 'react'
import Post from './Post';
import { PostData } from '../../../public/assets/PostData'
import { useReducer,useSelector } from 'react-redux';
function PostBody() {
  console.log("this is post  component")
   const {posts}=useSelector((state)=>state.postReducer);
  const {user}=useSelector((state)=>state.AuthReducer.authData);
  console.log(posts)


  return (
    <div>
         {posts.map((postData, id) => {
            return (
             <Post id={id} postData={postData}/>
            );
         })}

    </div>
  )
}

export default PostBody;