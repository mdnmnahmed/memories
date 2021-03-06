import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createPosts, updatePosts } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updatePosts(currentId, postData))
        } else {
            dispatch(createPosts(postData))
        }

        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: '',
        });
    }

    return (
        <>
            <Paper className={classes.paper}>
                <form onSubmit={handleSubmit} autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}>
                    <Typography variant="h6">{currentId ? 'Edit' : 'Create'} Momory</Typography>
                    <TextField variant="outlined" label="Creator" fullWidth
                        name="creator"
                        value={postData.creator}
                        onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                    />
                    <TextField variant="outlined" label="Title" fullWidth
                        name="title"
                        value={postData.title}
                        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                    />
                    <TextField variant="outlined" label="Message" fullWidth
                        name="message"
                        value={postData.message}
                        onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                    />
                    <TextField variant="outlined" label="Tags" fullWidth
                        name="tags"
                        value={postData.tags}
                        onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
                    />
                    <div className={classes.fileInput}>
                        <FileBase
                            name="selectedFile"
                            type="file"
                            multiple={false}
                            value={postData.selectedFile}
                            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                        />
                    </div>

                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                </form>
            </Paper>
        </>
    );
}

export default Form;
