import React from 'react';
import { Followers } from '../../../public/assets/Followers';

function Follower() {
  return (
    
      <div className='flex flex-col items-center bg-white w-full rounded-3xl pb-2'>
        <h2 className='font-bold text-2xl m-2'>Who is following you</h2>
        <div className='flex flex-col w-full'>
          {Followers.map((follower, id) => (
            <div key={id} className='m-2 mx-4  flex bg-orange-200 justify-between items-center px-4 rounded-lg shadow-sm'>
              <div className='flex items-center py-2'>
                <img src={follower.img} alt="" className='w-14 h-14 rounded-full' />
                <div className='mx-2 flex flex-col'>
                  <p className='font-bold'>{follower.name}</p>
                  <p className='text-gray-600'>{follower.username}</p>
                </div>
              </div>
              <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'>Follow</button>
            </div>
          ))}
        </div>
      </div>
    
  );
}

export default Follower;
