import * as PostApi from '../api/PostRequest';

export const getTimelinePosts = (id) => async (dispatch) => {
  dispatch({ type: "RETREIVING_START" });
  try {
    const { data } = await PostApi.getTimelinePosts(id);
    //console.log(data)
    dispatch({ type: "RETREIVING_SUCCESS", payload: data }); // Ensure you're passing 'payload' here
  } catch (error) {
    dispatch({
      type: "RETREIVING_FAIL",
      error: error.message || 'An error occurred while fetching posts.',
    });
    console.error(error); // For better debugging
  }
};

export const likePost = (postId, userId) => ({
  type: "POST_LIKED",
  payload: { postId, userId },
});

