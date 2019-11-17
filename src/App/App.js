import React from 'react';
import StartMenu from './StartMenu/StartMenu';
import EndMenu from './EndMenu/EndMenu';
import Board from './Board/Board';

class App extends React.Component {


  constructor(props) {
    super(props);

    this.play = this.play.bind(this);
    this.state = {
      phase: 'start',
      cardNums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]  
    };
  }
  // todo - is this where the game state should be?

  play() {
    this.setState({phase: 'play'})
  }
  
  render() {
    return (
      <div >
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