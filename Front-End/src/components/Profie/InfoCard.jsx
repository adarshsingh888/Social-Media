import React ,{useEffect, useState}from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import ProfileModel from './ProfileModel';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as UserApi from '../../api/UserRequest.js'
import { useDispatch } from 'react-redux';

function InfoCard() {
  const dispatch=useDispatch();
  const [profileUser,setProfileUser]=useState({});
  const [modelOpened,setModelOpened]=useState(false);
  const {user}=useSelector((state)=> state.AuthReducer.authData);
  const {id}=useParams();
  console.log(user)

  useEffect(()=>{
        console.log("In use effecet")
        const fetchprofileUser = async ()=>{
          if(id === user._id){
            setProfileUser(user)
            console.log(profileUser)
          }
          else{
            const profileuser=await UserApi.getUser(id);
            console.log(profileuser)
            setProfileUser(profileuser.data);
            console.log(profileUser)
          }
        }
        fetchprofileUser()
  },[])
  
  
  const handelLogOut=()=>{
      dispatch({type:"LOG_OUT"});
  }
  return (
    
    <div className='bg-white my-4 p-4 rounded-2xl flex flex-col shadow-xl'>
         <div className='flex justify-between my-4 mx-2'>
            <p className='font-bold text-lg'>Profile Info</p>      
             {profileUser._id === id ?  <FontAwesomeIcon icon={faPen} className='cursor-pointer' onClick={()=> setModelOpened(true)}/>:""}
         </div>
         
         <div className='mx-2'>
          <span className='font-bold'>Status</span>
          <span> {profileUser.relationship ? profileUser.relationship:""}</span>
         </div>
         <div className='mx-2'>
          <span className='font-bold'>Lives in  </span>
          <span>{profileUser.livesIn? profileUser.livesIn:""}</span>
         </div>
         <div className='mx-2'>
            <span className='font-bold'>
              Work at 
            </span>
            <span>
             { " "+profileUser.worksAt}
            </span>
         </div>
         <div className='m-2 mt-5 '>
           <span className='left-0 bg-red-600 text-white rounded-md p-2 cursor-pointer'onClick={handelLogOut}>Logout</span>
         </div>

         <ProfileModel modelOpened={modelOpened} setModelOpened={setModelOpened} data={user}/>
    </div>
  )
}

export default InfoCard;