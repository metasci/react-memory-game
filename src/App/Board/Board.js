import React from 'react';
import Card from './Card/Card'
import styles from './Board.module.css';

class Board extends React.Component {

    getRow(cardNumbers) {
        return (
            <div className={styles.row}>
                {cardNumbers.map(cardNumber => 
                    <div className={styles.box}>
                        <Card number={cardNumber} />
                    </div>    
                )}
            </div>
        );
    }

    render() {
        return (
            <div className={styles.board}>
                {this.getRow(this.props.cardNumbers.slice(0, 4))}
                {this.getRow(this.props.cardNumbers.slice(4, 8))}
                {this.getRow(this.props.cardNumbers.slice(8, 12))}
                {this.getRow(this.props.cardNumbers.slice(12, 16))}
            </div>
        );
    }

}

export default Board;