import Character from "../Character.js";

export default class Daemon extends Character {
    constructor(level, attack, defence, health, type) {
        super(level, attack, defence, health, type);
        this.level = level;
        this.attack = 10;
        this.defence = 40;
        this.health = 100;
        this.type = "daemon";
    }
}