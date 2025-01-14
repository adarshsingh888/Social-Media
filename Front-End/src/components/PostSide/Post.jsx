import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { likedPost } from '../../api/PostRequest';
import { likePost } from '../../actions/PostAction';

function Post({ postData }) {
    const { desc, userId, image, _id } = postData;
    const { user } = useSelector((state) => state.AuthReducer.authData);
    // console.log(postData.likes.includes(user._id))
    const [liked, setLiked] = useState(postData.likes.includes(user._id));
    const [countlikes, setcountLikes] = useState(postData.likes.length);
    // console.log(postData)
    const dispatch = useDispatch();
    const handlePostLiked = async () => {
        dispatch(likePost(postData._id, user._id))
        setLiked((prev) => !prev);
        console.log(liked)
        setcountLikes((prev) => (liked ? prev - 1 : prev + 1));
        likedPost(postData._id, user._id);
    };
    console.log(process.env.REACT_APP_PUBLIC_FOLDER + image)
    return (
        <div className="m-4 p-4 bg-white rounded-lg">
            <img
                src={image ? `${process.env.REACT_APP_PUBLIC_FOLDER}${image}` : ""}
                alt="Post"
                className="w-full rounded"
            />
            <div className="flex py-4">
                <FontAwesomeIcon
                    icon={faHeart}
                    className={liked ? "text-red-500 cursor-pointer" : "text-black cursor-pointer"}
                    onClick={handlePostLiked} // Use the renamed function
                />
                <FontAwesomeIcon icon={faComment} className="ml-4 text-black" />
                <FontAwesomeIcon icon={faPaperPlane} className="ml-4 text-black" />
            </div>
            <span>{countlikes} likes</span>
            <div>
                <span>{desc}</span>
            </div>
        </div>
    );
}

export default Post;
