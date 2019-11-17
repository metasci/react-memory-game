import React from 'react';
import StartMenu from './StartMenu/StartMenu';
import EndMenu from './EndMenu/EndMenu';
import Board from './Board/Board';
import styles from './App.module.css';

class App extends React.Component {


  constructor(props) {
    super(props);

    this.play = this.play.bind(this);
    this.start = this.start.bind(this);
    this.end = this.end.bind(this);
    this.state = {
      phase: 'start',
      visibility: styles.show,
      cardNums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]  
    };
  }
  // todo - is this where the game state should be?

  play() {
    this.transition('play');
  }

  start() {
    this.transition('start');
  }

  end() {
    this.transition('end');
  }

  transition(phase) {
    this.setState({ visibility: styles.hide });
    setTimeout(() => {
      this.setState({
        phase: phase,
        visibility: styles.show
      });
    }, 1000);
  }
  
  render() {
    return (
      <div className={this.state.visibility}>
        {this.state.phase === 'play' && <Board cardNumbers={this.state.cardNums} />}
        {this.state.phase === 'start' && <StartMenu play={this.play}/>}
        {this.state.phase === 'end' && <EndMenu />}
      </div>
    );
  }

}

export default App;


/*
 * this app has a few goals:
 * - rebuild my existing memory game using react
 * - use component state
 * 
 * 
 * 
 * Next app will be same memory game, but with redux
 */