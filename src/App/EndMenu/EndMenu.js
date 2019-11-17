import React from 'react';
import styles from './EndMenu.module.css';

class EndMenu extends React.Component {

    render() {
        return (
            <div className={styles.menu}>
                <img src="./images/winner.png" alt="" />
            </div>
        );
    }

}

export default EndMenu;