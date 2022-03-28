export function calcTileType(index, boardSize) {
  if(index == 0) return "top-left";
  if(index == 7) return "top-right";
  if(index > 0 && index < 7) return "top";
  if(0 == index % boardSize && index != 56) return "left";
  if(7 == index % boardSize && index != 63) return "right";
  if(index == 56) return "bottom-left";
  if(index > 56 &&  index != 63) return "bottom";
  if(index == 63) return "bottom-right";
  return 'center';
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}
