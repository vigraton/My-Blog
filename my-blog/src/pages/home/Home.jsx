import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        <>
            <h1>Home</h1>
            <Link to="../post/Post.jsx">
                <button>Nova publicação</button>
            </Link>
        </>
    )
}

export default Home
