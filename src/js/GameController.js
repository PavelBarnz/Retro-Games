import themes from "./themes.js"
import Team from "./Team.js";
import {characterGenerator, generateTeam} from "./generators.js";
import GamePlay from './GamePlay';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.teams = new Team(characterGenerator, generateTeam);
  }

  init() {
    this.gamePlay.drawUi(themes.prairie);
    this.gamePlay.addNewGameListener(() => {
      this.gamePlay.redrawPositions(this.teams.start(this.gamePlay.cells))
      console.log(this.teams.teams[0].character);
    });

    this.gamePlay.addCellClickListener(index => this.onCellClick(index))
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
  }

  onCellClick(index) {
    this.teams.teams.forEach(item => {
      if(item.position != index) return;
      if(
        item.position == index && item.character.type == "bowman" ||
        item.position == index && item.character.type == "swordsman" ||
        item.position == index && item.character.type == "magician"
      ){
        this.gamePlay.cells.forEach((item, index) => {
          this.gamePlay.deselectCell(index)
        })
        this.gamePlay.selectCell(index)
      } else {
         GamePlay.showError("Нельзя выбрать персонаж компьютера!")
      }
    })
    // TODO: react to click
  }

  onCellEnter(index) {

    console.log(index);
    if(this.gamePlay.cells[index].querySelector("div.character") !== null){
      
      // this.gamePlay.showCellTooltip(``, index)
    }
    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
