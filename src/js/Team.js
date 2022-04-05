import Bowman from "./characters/Bowman.js";
import Daemon from "./characters/Daemon.js";
import Magician from "./characters/Magician.js";
import Swordsman from "./characters/Swordsman.js";
import Undead from "./characters/Undead.js";
import Vampire from "./characters/Vampire.js";
import PositionedCharacter from "./PositionedCharacter.js";
import GamePlay from './GamePlay.js';
import {characterGenerator, generateTeam} from "./generators.js";
import GameState from "./GameState.js";


export default class Team {
    constructor(){
        this.characters = [new Daemon(1), new Undead(1), new Vampire(1), new Swordsman(1), new Bowman(1), new Magician(1)]
        this.startingPositions = [];
        this.teams = []
    }

    start(arg) {
        arg.forEach((item, index) => {
            if(
                0 == index % 8 || 
                1 == index % 8 || 
                6 == index % 8 || 
                7 == index % 8
            ) {
                this.startingPositions.unshift(index);
            }
        })

        const abc = generateTeam(this.characters, 1, 4);
        abc.forEach((item, index) => {
            this.teams.push(new PositionedCharacter(item, this.startingPositions[index]))
        })

        return this.teams;
    }

    selectAndMoveCharacter(index, gamePlay) {
        this.selectCell = gamePlay.cells.indexOf(document.querySelector("div.selected"));

        if(!gamePlay.cells[index].firstElementChild && this.selectCell !== -1) {
            this.teams.forEach( item => {
                if(item.position == this.selectCell){
                        item.position = index;
                        gamePlay.deselectCell(this.selectCell);
                        gamePlay.selectCell(index);
                        gamePlay.redrawPositions(this.teams);
                    }
            })
            // console.log(GameState.from())
            return;
        }
        if(
            gamePlay.cells[index].firstElementChild.classList.contains("bowman") ||
            gamePlay.cells[index].firstElementChild.classList.contains("swordsman") ||
            gamePlay.cells[index].firstElementChild.classList.contains("magician")
        ){
            const selectedCell = gamePlay.boardEl.querySelector("div.selected");
            if(selectedCell) selectedCell.classList.remove("selected");
            gamePlay.selectCell(index);
        } else {
            GamePlay.showError("Нельзя выбрать этого персонажа");
        }

        return {player: "Pasha"};
    }
}
