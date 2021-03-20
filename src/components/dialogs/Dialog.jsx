import React from 'react';
import styles from './Dialog.module.css';
import {NavLink} from "react-router-dom";

function Dialog(props) {
    let path = "/dialogs/" + props.id;

    return (
        <li className={styles.dialog}>
            <img className={styles.image} src="data:image/png;base64,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" alt="" />
            <NavLink to = {path} activeClassName={styles.active} className={styles.dialog_link}>{props.name}</NavLink>
        </li>
    )

}

export default Dialog;