import React from 'react'
import Edit from '../image/edit.png'
import Delete from '../image/delete.png'
import {Link, useLocation} from 'react-router-dom'
import Menu from '../components/Menu'
import { AuthContext } from '../context/authContext'
import axios from 'react'
import {  userContext } from 'react'
import { useEffect } from "react";
import moment from 'react';
import { useState } from 'react';
import{useNavigate} from 'react-router-dom'





const Single=()=>{

    const [post, setPosts] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const postId = location.pathname.split("/")[2];

    const {currentUser} = userContext(AuthContext)




    useEffect(()=>{
        const fetchData = async()=>{
            try{
              const res = await axios.get(`/posts${postId}`);
              setPosts(res.data)
          }
          catch(err){
            console.log(err)
          }
        }
        fetchData();
      },[postId]);


        const handleDelete = async ()=>{
            try{
                await axios.delete(`/posts/${postId}`);
                navigate('/')
            }
            catch(err){
console.log(err)
            }
        }
    return(
        <div className="single">
        <div className="content">
            <img src={post?.img} alt=''/>
        <div className="user">
            {post.userImg && < img src={post.userImg} alt=''/> 
                     }
           
        
        <div className="info">
            <span>organizationName</span>
            <p>Posted on {moment(post.date).fromNow()}</p>
        </div>
       {currentUser.username===post.username && <div className="edit">
            <Link to={`/write?edit=2`}>
            <img src={Edit} alt=""/>
            </Link>
           
            <img onClick={handleDelete} src={Delete} alt=""/>
        </div>}
        </div>
       
     <h1>{post.title}</h1>
            {post.desc}
        <Menu cat={post.cat}/>
        </div>
        <Menu/>
        </div>
    )
}

export default Single