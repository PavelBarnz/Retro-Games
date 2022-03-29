import Bowman from "./characters/Bowman.js";
import Daemon from "./characters/Daemon.js";
import Magician from "./characters/Magician.js";
import Swordsman from "./characters/Swordsman.js";
import Undead from "./characters/Undead.js";
import Vampire from "./characters/Vampire.js";
import PositionedCharacter from "./PositionedCharacter.js";


export default class Team {
    constructor(characterGenerator, generateTeam, gamePlay){
        this.gamePlay = gamePlay;
        this.characterGenerator = characterGenerator;
        this.generateTeam = generateTeam;
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

        const abc = this.generateTeam(this.characters, 1, 4);
        abc.forEach((item, index) => {
            this.teams.push(new PositionedCharacter(item, this.startingPositions[index]))
        })

        return this.teams;
    }
}
