import React,{useEffect} from 'react'
import Post from './Post';
import { getTimelinePosts } from '../../actions/PostAction';
import { PostData } from '../../../public/assets/PostData'
import { useReducer,useSelector,useDispatch } from 'react-redux';
function PostBody() {
  const dispatch=useDispatch();
  //console.log("this is post  component")
  const {posts}=useSelector((state)=>state.postReducer);
  const {user}=useSelector((state)=>state.AuthReducer.authData);
 // console.log(posts)

   useEffect(()=>{
          console.log("form useEffect")
          dispatch(getTimelinePosts(user._id));
      },[]);
  
  return (
    <div>
         {posts.map((postData, id) => {
            return (
             <Post key={id} postData={postData}/>
            );
         })}

    </div>
  )
}

export default PostBody;