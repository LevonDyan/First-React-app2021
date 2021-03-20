import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post';

function MyPosts (props) {
    /*
    let postsData = [
        { message: "Hi, how are you?", likeCount: 3},
        { message: "It's my first post.", likeCount: 7}
    ]
    */
    let posts = props.posts.map(postsEl => <Post message={postsEl.message} likeCount={postsEl.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPosts(text);
        props.updateNewPostText('')
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <section className={styles.myPosts}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={ addPost }>Add post</button>
                    </div>
                </div>
                <ul className={styles.list}>
                    {posts}
                </ul>
        </section>
    )
}

export default MyPosts;