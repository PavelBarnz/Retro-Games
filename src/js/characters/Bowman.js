import Character from "../Character.js";

export default class Bowman extends Character {
    constructor(level, attack, defence, health, type) {
        super(level, attack, defence, health, type);
        this.level = level;
        this.attack = 25;
        this.attackDistance = 2;
        this.stepDistance = 2;
        this.defence = 25;
        this.health = 100;
        this.type = "bowman";
    }
}