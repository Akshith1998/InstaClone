
import Navbar from "../Components/Navbar/Navbar"
import { useEffect, useState } from "react"
import axios from "axios";
import Post from "./Post";

const PostView = () => {
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
    const getdata=async()=>{
      const res=await axios.get("https://instaclone-akshith-server.herokuapp.com/post");
      setPosts((res.data).reverse());
    }
    getdata()
  },[]);
  
  return (
    <div>
        <Navbar/>
        {posts.map((post)=>{
          return <Post key={post._id} data={post}/>
        })}
    </div>
  )
}

export default PostView