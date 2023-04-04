import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const navigate = useNavigate()
    const handleNavigate = ()=>{
      navigate(`/post/${post.id}`)
    }
    return (
        <div className='post'>
            <h4>ID: {post.id}</h4>
            <p>Title: {post.title}</p>
            <p>Post Body: {post.body}</p>
            <Link to={`/post/${post.id}`}>Show Details</Link>
            <Link to={`/post/${post.id}`}><button>Show Post Details</button></Link>
       <button onClick={handleNavigate}>With Button Handle</button>
        </div>
    );
};

export default Post;