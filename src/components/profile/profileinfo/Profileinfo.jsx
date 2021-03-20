import React from 'react';
import styles from './Profileinfo.module.css'

function ProfileInfo() {
    return (
        <section className="profileInfo">
            <div className="profile_image">
                <img src="https://www.nationsonline.org/gallery/USA/Seattle-Space-Needle.jpg" alt=""/>
            </div>

            <div className={styles.description}>
                Description
            </div>
        </section>
    )

}

export default ProfileInfo;