export default class GameState {
  static from(object) {
    localStorage.setItem("item", JSON.stringify(object));
    let a = JSON.parse(localStorage.getItem("item"))
    console.log(a)
  }
}
