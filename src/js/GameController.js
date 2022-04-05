import themes from "./themes.js"
import Team from "./Team.js";
import cursors from "./cursors.js";
import GameState from "./GameState.js";
import Bowman from "./characters/Bowman.js";

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.team = new Team();
  }

  init() {
    this.gamePlay.drawUi(themes.prairie);
    this.gamePlay.addNewGameListener(() => {
      this.gamePlay.redrawPositions(this.team.start(this.gamePlay.cells));
      this.gamePlay.setCursor(cursors.pointer);
    });

    this.gamePlay.addCellClickListener(index => this.onCellClick(index));
    this.gamePlay.addCellEnterListener(index => this.onCellEnter(index))
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
  }

  onCellClick(index) {
    console.log(this.team.selectAndMoveCharacter(index, this.gamePlay));
  }

  onCellEnter(index) {
      
  }

  onCellLeave(index) {
    // if(this.gamePlay.cells[index].querySelector("div.character") !== null){
    //   this.gamePlay.setCursor(cursors.pointer)
    // }
    // TODO: react to mouse leave
  }
}
