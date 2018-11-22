import React from 'react';
import Game from './logic.js';
import Header from './Header.js'
import GridContainer from './GridContainer.js';
import NumContainer from './NumContainer.js';

import './main.css';


export default class React2048 extends React.Component {

    state = {
        gameData: new Game(),
    }

    handleNewGame=(e)=> {
        this.setState({
            gameData: new Game(),
        });
    }

    handleKeyDown(event) {
        // event.preventDefault;
        if (event.keyCode >= 37 && event.keyCode <= 40) {
            var direction = event.keyCode - 37;
            var gd = this.state.gameData.move(direction);
            this.setState({
                gameData: gd
            });
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', e=>{this.handleKeyDown(e)});
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', e=>{this.handleKeyDown(e)});
    }

    render() {
        var gameData = this.state.gameData;
        return (
            <div className={'wrapper-for-'+gameData.size}>
            <Header handleNewGame={this.handleNewGame}  gameData={gameData} />
            <div className={'container-for-'+gameData.size} >
                <GridContainer gameData={gameData.gd} />
                <NumContainer gd={gameData.gd} />
            </div>
          </div>
        )
    }
}
