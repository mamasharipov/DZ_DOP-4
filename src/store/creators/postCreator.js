import { setPosts } from "../slices/postSlice";


const fetchAllPosts= (dispatch) => {
    console.log('1');
    fetch("https://jsonplaceholder.typicode.com/posts")

        .then((response) => response.json())
        
        .then((data) => dispatch(setPosts(data)));
};


export default fetchAllPosts;