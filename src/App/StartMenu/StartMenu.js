import React from 'react';
import styles from './StartMenu.module.css';
import { delay } from '../../services/utilService';

class StartMenu extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            classes: [styles.menu]
        };
    }

    handleClick() {
        this.setState({ classes: [...this.state.classes, styles.hide] });   
        delay(this.props.play, 1000);
    }

    render() {
        return (
            <div className={this.state.classes.join(' ') }>
                <img src="./images/start.png" alt="" />
                <div onClick={this.handleClick} className={styles.btn}>
                    play
                </div>
            </div>
        );
    }

}

export default StartMenu;