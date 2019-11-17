import React from 'react';
import styles from './Card.module.css';
 
class Card extends React.Component {
    render() {
        return (
            <div className={styles.card}>
                <div className={styles.front}></div>
                <div className={styles.back}></div>
            </div>
        );
    }
}
export default Card;