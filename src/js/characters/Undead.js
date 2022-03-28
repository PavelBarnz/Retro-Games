import Character from "../Character.js";

export default class Undead extends Character {
    constructor(level, attack, defence, health, type) {
        super(level, attack, defence, health, type);
        this.level = level;
        this.attack = 40;
        this.defence = 10;
        this.health = 100;
        this.type = "undead";
    }
}