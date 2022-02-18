import React from 'react';
import PropTypes from 'prop-types'
import styles from './PeopleList.module.css'

const PeopleList = ({people}) => {
    return (
        <ul className={styles.list__container}>
            {
                people.map(({name, img, id})=>
                    <li key={id} className={styles.list__item}>
                        <a href="#">
                            <p><strong>name: </strong>{name}</p>
                            <img src={img} alt={name} className={styles.person__photo} />
                        </a>

                    </li>
                )
            }
        </ul>
    );
};

PeopleList.propTypes = {
    people: PropTypes.array
}

export default PeopleList;