import React from "react";
import AddPost from "./AddPost_component/AddPost";
import Post from "./Post_component/Post";
import { useState } from "react";
import { useEffect } from "react";
import './App.css'

export default function App(){

    const [posts, setPosts] = useState([]);

    const fetchPosts = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
    const data = await response.json();
    setPosts(data);
    }

    useEffect(() => {
        fetchPosts()
    }, []);


    const addPost = async(title, body) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body,
            userId: Math.random().toString(36).slice(2),
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const data = await response.json();
    setPosts((prevPosts) => [data, ...prevPosts])
    };

    const deletePost = async(id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE'
    })
        if(response.status === 200) {
        setPosts(
            posts.filter((post) => {
            return post.id !== id;
            })
        )
        }
    };

    return (
    <main>
    <h1>Handle API with React</h1>
        <AddPost addPost={addPost}/>
        <h2>Posteos</h2>
        <section className="posts-container">
        {posts.map((post) => 
            <Post 
            key={post.id} 
            id={post.id}
            title={post.title} 
            body={post.body} 
            deletePost={deletePost}
            />
        )}
        </section>
    </main>
    )
}