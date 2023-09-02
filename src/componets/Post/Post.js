import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import ('./Post.css')
 


const Post = (props) => {
    // console.log(props)
    const henlear = props.henlear;
    const{image, name, id, usericon,date, readtime, poststitles, tag, } = props.product;
    return (
        <div className='postcontainer'>
            <div className="container">
               <img src={image} alt="" />
               <div className='artior-detiles'>
                <div className='author-info'>
                  <img src={usericon} alt="" />
                  <div className="name-date"> 
                    <p>{name}</p>
                    <p>{date}</p>
                  </div>
                </div>
                <div className='authoe-posts'>
                  <p>{readtime} min read</p>
                  <p onClick={()=>henlear(props.post)}><FontAwesomeIcon icon={faBookmark} /></p>
                </div>
               </div>
            </div>
            <div className="cart-detiles">
             <h1>{poststitles}</h1>
             <p>{tag}</p>
             <a href="/mark">Mark as read</a>
            </div>
        </div>
    );
};

export default Post;