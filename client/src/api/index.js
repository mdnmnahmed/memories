import Axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => Axios.get(url);

export const createPosts = (newPost) => Axios.post(url, newPost);

export const updatePosts = (id, updatePost) => Axios.patch(`${url}/${id}`, updatePost);










