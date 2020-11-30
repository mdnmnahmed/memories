import * as api from '../api';

//Actions Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}


export const createPosts = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPosts(post);
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}


export const updatePosts = (id, updatePostData) => async (dispatch) => {
    try {
        const { data } = await api.updatePosts(id, updatePostData);
        dispatch({ type: 'UPDATE_POST', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}