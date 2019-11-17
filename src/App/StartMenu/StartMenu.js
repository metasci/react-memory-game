import React from 'react';
import styles from './StartMenu.module.css';

class StartMenu extends React.Component {

    render() {
        return (
            <div className={styles.menu}>
                <img src="./images/start.png" alt="" />
                <div onClick={this.props.play} className={styles.btn}>
                    play
                </div>
            </div>
        );
    }

}

export default StartMenu;