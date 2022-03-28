import { calcTileType } from "../utils.js";

test.each([
    [calcTileType(0, 8), "top-left"],
    [calcTileType(7, 8), "top-right"],
    [calcTileType(5, 8), "top"],
    [calcTileType(16, 8), "left"],
    [calcTileType(15, 8), "right"],
    [calcTileType(56, 8), "bottom-left"],
    [calcTileType(58, 8), "bottom"],
    [calcTileType(63, 8), "bottom-right"],
    [calcTileType(12, 8), "center"],
    
])(
    ("Тест функции calcTitleType класса utils.js"),
    (data, expected) => {
        expect(data).toEqual(expected);
    }
)