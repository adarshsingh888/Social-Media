import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart ,faComment,faShare,faPaperPlane} from '@fortawesome/free-solid-svg-icons';
function Post({postData}) {
    console.log(postData.data);
    const {image,desc,likes,userId}=postData.data;
    const liked=false;
return (
    <div className='m-4 p-4 bg-white rounded-lg'>
        <img src={image} alt="" />

        <div className='flex py-4'>
            <FontAwesomeIcon icon={faHeart} className={liked ? "text-red-500 " : "text-black"} />
            <FontAwesomeIcon icon={faComment} className="ml-4 text-black" />
            <FontAwesomeIcon icon={faPaperPlane} className="ml-4 text-black" />
        </div>
        <span> {likes.length} likes</span>
        <div>
            <span className='font-bold mr-2'>{name}</span>
            <span>{desc}</span>
            
        </div>

    </div>
)
}

export default Post;