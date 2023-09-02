import React from 'react';
import './Bookmarkright.css'

const Bookmarkright = (props) => {
    const {addbookmark}=props;
    const time = [];
    addbookmark.map(posts => {
    //   const storedata= localStorage.getItem('posts')
            const bookmarksid = document.getElementById('bookmarks')
            const newdiv = document.createElement('div')
            newdiv.classList.add('bookmarkheading')
            newdiv.innerHTML=`<h5>${posts.title}</h5>`
            bookmarksid.appendChild(newdiv)
           time.push(parseInt(posts.readtime))
    })
    const totalReadTime = time.reduce((oldtime, currenttime) => oldtime + currenttime, 0);
    


    return (
        <div>
            <div className="spendTime">
                <h4>Spent time on read :  min</h4>
            </div>
            <div className="bookmarks" id='bookmarks'>
                <h3>Bookmarked Blogs : </h3>
                
            </div>
        </div>
    );
};

export default Bookmarkright;