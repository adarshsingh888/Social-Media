import React, { useRef, useState } from 'react';
import profileImg from '../../../public/assets/img/profileImg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faVideo, faMapMarkerAlt, faCalendarAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

function PostShare() {
  const [image, setImage] = useState(null);
  const imgRef = useRef();

  const imageClicked = () => {
    document.getElementById('fileInput').click();
  };

  const videoClicked = () => {
    imgRef.current.click();
  };

  const imgChange = (e) => {
    const img = e.target.files[0];
    console.log(img);
    setImage(URL.createObjectURL(img));
    console.log(image);
  };

  return (
    <div className='flex flex-col bg-white m-4 rounded-lg shadow-lg'>
      <div className='flex flex-wrap p-4 justify-center items-center border-b'>
        <img src={profileImg} alt="" className='w-10 h-10 rounded-full mr-4' />
        <input
          type="text"
          placeholder="What's happening?"
          className='px-4 py-2 rounded-full flex-grow border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>
      <div className='flex p-4 justify-around'>
        <button className='flex items-center m-1 text-blue-500 hover:text-blue-700' onClick={imageClicked}>
          <FontAwesomeIcon icon={faImage} className='text-blue-500 mr-2' /> Photo
        </button>
        <button className='flex items-center m-1 text-red-500 hover:text-red-700' onClick={videoClicked}>
          <FontAwesomeIcon icon={faVideo} className='text-red-500 mr-2' /> Video
        </button>
        <button className='flex items-center m-1 text-green-500 hover:text-green-700'>
          <FontAwesomeIcon icon={faMapMarkerAlt} className='text-green-500 mr-2' /> Location
        </button>
        <button className='flex items-center m-1 text-yellow-500 hover:text-yellow-700'>
          <FontAwesomeIcon icon={faCalendarAlt} className='text-yellow-500 mr-2' /> Schedule
        </button>
        <button className='border border-black p-2 rounded-lg hover:bg-green-500 hover:text-white transition duration-300'>Share</button>
      </div>

      <input type="file" accept="image/*" className="hidden" id="fileInput" ref={imgRef} onChange={imgChange} />
      {image != null && (
        <div className='relative mt-4 w-52 bg-red-300 p-4'>
          <FontAwesomeIcon icon={faTimes} onClick={() => setImage(null)} className='absolute top-0 right-0 cursor-pointer text-red-500' />
          <img src={image} className='w-full h-auto rounded-lg' />
        </div>
      )}
    </div>
  );
}

export default PostShare;
