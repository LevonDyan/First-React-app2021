import React from 'react';
import MyPosts from './myposts/MyPosts';
import './Profile.css';
import ProfileInfo from "./profileinfo/Profileinfo";

function Profile (props) {
/*
    let postsData = [
        { message: "Hi, how are you?", likeCount: 3},
        { message: "It's my first post.", likeCount: 7}
    ]
*/
    return (
        <div className="profile">

            <ProfileInfo/>
            <MyPosts posts = {props.profilePage.postsData}
                     newPostText = {props.profilePage.newPostText}
                     addPosts = {props.addPost}
                     updateNewPostText = {props.updateNewPostText}
            />

        </div>
    );
}

export default Profile;