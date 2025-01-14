import React, { useEffect, useState } from 'react';
import User from './User';
import { getAllUser } from '../../api/UserRequest.js';
import { useSelector } from 'react-redux';
function Follower() {
  const [person, setPerson] = useState([]);
  const { user } = useSelector((state) => state.AuthReducer.authData)
  console.log(user)
  useEffect(() => {
    const fetch = async () => {
      const { data } = await getAllUser();
      console.log(data)
      setPerson(data)
      console.log(person)
    }
    fetch();
  }, [])


  return (


    <div className="  bg-white w-full  rounded-3xl pb-2 flex flex-col flex-grow items-center overflow-hidden">
      <h2 className="font-bold text-2xl m-2">
        People you might know.
      </h2>
      <div className="flex flex-col w-full flex-grow overflow-y-auto hide-scrollbar">
        {person.map((person, id) =>
          person._id !== user._id ? <User key={id} person={person} /> : null
        )}
      </div>
      {/* <div className="mt-2 p-2 rounded-md cursor-pointer text-blue-600 hover:bg-black hover:text-white">
        Show all
      </div> */}
    </div>



  );
}

export default Follower;
