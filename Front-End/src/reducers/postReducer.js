const postReducer = (
    state = { posts: [], loading: false, error: false, uploading: false },
    action
) => {
    switch (action.type) {
        case "POST_START":
            return { ...state, loading: true, error: false };
        case "POST_SUCCESS":
            console.log(action);
            return { ...state, posts: [action.data, ...state.posts], loading: false, error: false };
;
        case "POST_FAIL":
            return { ...state, loading: false, error: true };
        default:
            return state;
    }
};

export default postReducer;
