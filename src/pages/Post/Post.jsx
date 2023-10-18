import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import fetchAllPosts from "../../store/creators/postCreator";
import classes from "./Post.module.css";

const Post = () => {
  const { posts } = useSelector((state) => state.posts);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const getShortValue = (text, postId) => {
    return text.length > 20 ? (
      <>
        {text.slice(0, 20)}
        <Link to={`/post/${postId}`} state={{ from: location.pathname }}>
          More
        </Link>
      </>
    ) : (
      text
    );
  };

  const onMoreClick = (postId) => {
    navigate(`/post/${postId}`);
  };

  useEffect(() => {
    fetchAllPosts(dispatch);
  }, [dispatch]);

  return (
    <div className={classes.container}>
      {posts.length !== 0 &&
        posts.map((post) => (
          <div className={classes.posts} key={`post-${post.id}`}>
            <div className={classes.post}>

              <h1>{post.id}</h1>

              <h2>{post.title}</h2>

              <p>{getShortValue(post.body, post.id)}</p>
              
            </div>
            <button onClick={() => onMoreClick(post.id)}>Details</button>
          </div>
        ))}
    </div>
  );
};

export default Post;