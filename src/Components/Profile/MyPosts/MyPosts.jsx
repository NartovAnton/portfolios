import React from "react";
import p from './MyPosts.module.css'
import Post from "./Post/Post";




const MyPosts = (props) => {

    let postElements = props.postsData.map(posts => <Post massage={posts.message} like={posts.like} />)

    return (
        <div className={p.post}>
            My posts
            <div>
                New posts
            </div>
            <div className={p.sms}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;