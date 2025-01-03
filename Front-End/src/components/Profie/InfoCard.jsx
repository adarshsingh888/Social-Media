import React ,{useState}from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import ProfileModel from './ProfileModel';
function InfoCard() {
  const [modelOpened,setModelOpened]=useState(false);
  return (
    
    <div className='bg-white my-4 p-4 rounded-2xl flex flex-col'>
         <div className='flex justify-between my-4 mx-2'>
            <p className='font-bold'>Info Head</p>      
            <FontAwesomeIcon icon={faPen} onClick={()=> setModelOpened(true)}/>
         </div>
         <div className=''>
          <span className='font-bold'>Status</span>
          <span> in relationship</span>
         </div>
         <div>
          <span className='font-bold'>Lives in </span>
          <span>Gorakhpur</span>
         </div>
         <div>
            <span className='font-bold'>
              Work at
            </span>
            <span>
              Google
            </span>
         </div>

         <ProfileModel modelOpened={modelOpened} setModelOpened={setModelOpened}/>
    </div>
  )
}

export default InfoCard;