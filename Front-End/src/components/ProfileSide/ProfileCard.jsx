import React from 'react'
import profileImg from '../../../public/assets/img/profileImg.jpg'
import cover from '../../../public/assets/img/cover.jpg'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import defaultProfile from '../../../public/assets/img/defaultProfile.png'
function ProfileCard() {
  const {id}=useParams();
  const { user } = useSelector((state) => state.AuthReducer.authData)
  return (

    <div className='max-w-4xl sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-lg sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto m-4 bg-white shadow-xl rounded-lg text-gray-900'>
      <div className='rounded-t-lg h-32 overflow-hidden'>
        <img
          className='object-cover object-top w-full'
          src={user.coverPicture ? process.env.REACT_APP_PUBLIC_FOLDER + user.coverPicture : cover}
          alt='Cover'
        />
      </div>
      <div className='mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden'>
        <img
          className='object-cover object-center h-32'
          src={user.profilePicture ? process.env.REACT_APP_PUBLIC_FOLDER + user.profilePicture : defaultProfile}
          alt='Profile'
        />
      </div>
      <div className='text-center mt-2'>
        <h2 className='font-semibold'>{user.firstname + " " + user.lastname}</h2>
        <p className='text-gray-500'>{user.worksAt ? user.worksAt : "Write about yourself"}</p>
      </div>
      <ul className='py-4 mt-2 text-gray-700 flex items-center justify-around'>
        <li className='flex flex-col items-center justify-around'>

          <div>{user.followers.length}</div>
          <p className='text-xs sm:text-sm'>Followers</p>
        </li>
        <div className='border-l-2 border-gray-300 h-8 sm:h-12 mx-2 sm:mx-4'></div>
        <li className='flex flex-col items-center justify-around'>

          <div>{user.following.length}</div>
          <p className='text-xs sm:text-sm'>Following</p>
        </li>
      </ul>
      <div className={id===undefined ? 'p-4 border-t mx-8 mt-2': "'p-4 mx-8 mt-2'"}>
        <Link to={`/profile/${user._id}`}>
       {id === undefined ?  <button className='w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2'>
            My Profile
          </button>:""}
        </Link>
      </div>
    </div>


  )
}

export default ProfileCard