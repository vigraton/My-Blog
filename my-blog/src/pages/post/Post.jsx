import { Link } from "react-router-dom";
import React, { useState } from "react";

function Post(){
    const [post, setPost] = useState("Nhoi");
    const [newPost, setNewPost] = useState("");

    function handleInputChange(event){
        setNewPost(event.target.value);
    }

    function AddPost(){
        if(newPost.trim() !== ""){
            setNewPost(p => [...p, newPost]);
            setNewPost("");
        }
    }

    function SavePost(){}

    function EditPost(){}

    function DeletePost(index){
        const updatePost = post.filter((_, i) => i !== index);
        setPost(updatePost);
        // Não faço ideia do que isso significa ;-;
    }

    return(
        <>
            <h1>Post</h1>

            <Link to="/">
                <button>Voltar</button>
            </Link><br></br><br></br>
            
            <input 
            onChange={handleInputChange}
            placeholder="Escreva seu post..."
            style={{ width: '500px', height: '40px', fontSize: '12px' }}
            ></input>
            <button id="public-btn" onClick={AddPost}>Publicar</button>
        </>
    )
}

export default Post