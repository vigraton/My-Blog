import { Link } from "react-router-dom";
import React from "react";

function Post(){
    return(
        <>
            <h1>Post</h1>
            <Link to="/">
                <button>Voltar</button>
            </Link>
        </>
    )
}

export default Post