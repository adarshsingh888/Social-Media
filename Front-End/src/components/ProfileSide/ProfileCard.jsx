import React from 'react'
import profileImg from '../../../public/assets/img/profileImg.jpg'
import cover from '../../../public/assets/img/cover.jpg'


function ProfileCard() {
  return (
    <div className='my-2 bg-yellow-200  flex flex-col justify-center items-center rounded-3xl p-4'>
      <div className='relative w-full'>
        <img src={cover} className='cover w-full rounded-3xl' />
        <div className='flex justify-center'>
          <img src={profileImg} className='rounded-full w-24 sm:w-32 md:w-48 absolute top-12 sm:top-16' />
        </div>
      </div>
    
      <div className='mt-16 sm:mt-24 mb-4 flex flex-col items-center'>
        <p className='font-bold text-lg sm:text-xl'>Adarsh Singh</p>
        <p className='text-sm sm:text-base'>MERN Stack developer</p>
        <hr className='w-full border-t-2 border-gray-300 my-4' />
        <div className='flex w-full justify-around items-center'>
          <div className='flex flex-col items-center mx-2'>
            <p className='text-sm sm:text-base'>4324</p>
            <p className='text-xs sm:text-sm'>Followers</p>
          </div>
          {/* Vertical Line */}
          <div className='border-l-2 border-gray-300 h-8 sm:h-12 mx-2 sm:mx-4'></div>
          <div className='flex flex-col items-center mx-2 sm:mx-4'>
            <p className='text-sm sm:text-base'>2321</p>
            <p className='text-xs sm:text-sm'>Following</p>
          </div>
        </div>
        <hr className='w-full border-t-2 border-gray-300 my-4' />

        <div className='text-sm sm:text-base'>
          My Profile
        </div>
      </div>
     
    </div>
  )
}

export default ProfileCard