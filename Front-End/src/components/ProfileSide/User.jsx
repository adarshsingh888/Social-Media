import React, { useState } from 'react'
import defaultProfile from '../../../public/assets/img/defaultProfile.png'
import { useDispatch, useSelector } from 'react-redux'
import { followUser, unfollowUser } from '../../actions/UserAction.js';
function User({ person }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.AuthReducer.authData)
  //console.log("User:::", user)
  const [following, setFollowing] = useState(
    user.following.includes(person._id)
  );
  //console.log("Person::::", person)

  const handlefollow = () => {
    following
      ? dispatch(unfollowUser(person._id, user))
      : dispatch(followUser(person._id, user));
    setFollowing((prev) => !prev);
  };
  return (
    <div className='m-2 mx-4  flex bg-orange-200 justify-between items-center px-4 rounded-lg shadow-sm'>
      <div className='flex items-center py-2'>
        <img src={person.profilePicture ? process.env.REACT_APP_PUBLIC_FOLDER + person.profilePicture : defaultProfile} alt="" className='w-14 h-14 rounded-full' />
        <div className='mx-2 flex flex-col'>
          <p className='font-bold'>{person.firstname + " " + person.lastname}</p>
          <p className='text-gray-600'>{person.username}</p>
        </div>
      </div>
      <button className={following ? 'bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-600' : 'bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'} onClick={handlefollow}>{following ? "Unfollow" : "Follow"}</button>
    </div>
  )
}

export default User