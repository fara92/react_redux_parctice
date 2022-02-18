import React from 'react';
import img from './img/not-found.png'
import {useLocation} from "react-router-dom";
import styles from './NotFoundPage.module.css'

const NotFoundPage = props => {
    let location = useLocation();

    return (
        <div>
            <img className={styles.img} src={img} alt="not found"/>
            <p className={styles.text}> not match for <u>{location.pathname}</u></p>
        </div>
    );
};

export default NotFoundPage;