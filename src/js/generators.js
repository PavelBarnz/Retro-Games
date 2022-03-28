/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
export function* characterGenerator(allowedTypes, maxLevel) {
  while(true) {
    let result = allowedTypes[Math.floor(Math.random() * allowedTypes.length)];
    result.level = Math.floor(Math.random() * (maxLevel - 1) + 1); 
    yield result;
  }
  // TODO: write logic here
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  const result = [];
  allowedTypes.forEach(item => {
    if(
      item.type == "undead" ||
      item.type == "daemon" ||
      item.type == "vampire"
    ){
      if(result.length >= characterCount / 2) return;
      item.level = maxLevel
      result.push(item);
    } else {
      if(result.length >= characterCount) return;
      item.level = maxLevel
      result.push(item);
    }
  })

  return result;
}
