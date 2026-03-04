/**
 * 🎨 Rangoli Border Maker - String Transform
 *
 * Diwali aa rahi hai! Priya digital rangoli designs bana rahi hai terminal pe.
 * String transform methods use karke patterns banana hai.
 * Tu Priya ki madad kar!
 *
 * Methods to explore: .slice(), .split(), .join(), .replace(),
 *   .replaceAll(), .repeat()
 *
 * Functions:
 *
 *   1. repeatPattern(pattern, times)
 *      - .repeat(times) use karke pattern ko repeat karo
 *      - Agar pattern string nahi hai ya times positive integer nahi hai, return ""
 *      - Example: repeatPattern("*-", 4) => "*-*-*-*-"
 *
 *   2. extractRangoliCenter(design, start, end)
 *      - .slice(start, end) use karke rangoli ka center part nikalo
 *      - Agar design string nahi hai, return ""
 *      - Agar start/end numbers nahi hain, return ""
 *      - Example: extractRangoliCenter("***LOTUS***", 3, 8) => "LOTUS"
 *
 *   3. splitAndJoinRangoli(colorString, oldSep, newSep)
 *      - .split(oldSep) se tod aur .join(newSep) se jod
 *      - Separator change karna hai colors ke beech mein
 *      - Agar colorString string nahi hai, return ""
 *      - Example: splitAndJoinRangoli("red,blue,green", ",", " | ") => "red | blue | green"
 *
 *   4. replaceRangoliColor(design, oldColor, newColor)
 *      - .replaceAll() use karke ek color ko doosre se replace karo
 *      - Agar koi bhi param string nahi hai, return ""
 *      - Example: replaceRangoliColor("red-blue-red-green-red", "red", "pink")
 *                 => "pink-blue-pink-green-pink"
 *
 *   5. makeRangoliBorder(char, length)
 *      - .repeat() se char ko bahut baar repeat karo
 *      - Phir .slice(0, length) se exact length ka border banao
 *      - Agar char string nahi hai ya length positive number nahi hai, return ""
 *      - Example: makeRangoliBorder("*", 5) => "*****"
 *      - Example: makeRangoliBorder("=-", 7) => "=-=-=-="
 *
 * @example
 *   repeatPattern("*-", 4)                    // => "*-*-*-*-"
 *   extractRangoliCenter("***LOTUS***", 3, 8) // => "LOTUS"
 *   splitAndJoinRangoli("red,blue", ",", "-")  // => "red-blue"
 */
export function repeatPattern(pattern, times) {
  //Agar pattern string nahi hai ya times positive integer nahi hai, return ""
  if(typeof pattern !== "string" || isNaN(times) || !Number.isInteger(times) || times<=0) return ""
  //.repeat(times) use karke pattern ko repeat karo
  return pattern.repeat(times);
}

export function extractRangoliCenter(design, start, end) {
  // Agar design string nahi hai, return ""
  // Agar start/end numbers nahi hain, return ""
  if(isNaN(start) || !Number.isInteger(start) || isNaN(end) ||!Number.isInteger(end) || typeof design !== "string") return ""
  // .slice(start, end) use karke rangoli ka center part nikalo
  return design.slice(start, end);
}

export function splitAndJoinRangoli(colorString, oldSep, newSep) {
  // Agar colorString string nahi hai, return ""
  if(typeof colorString !== "string") return ""
  // Example: splitAndJoinRangoli("red,blue,green", ",", " | ") => "red | blue | green"
  return colorString.split(oldSep).join(newSep);
}

export function replaceRangoliColor(design, oldColor, newColor) {
  // Agar koi bhi param string nahi hai, return ""
  if(typeof design !== "string" || typeof oldColor !== "string" || typeof newColor !== "string" ) return ""
  // Example: replaceRangoliColor("red-blue-red-green-red", "red", "pink")
  //          => "pink-blue-pink-green-pink"
  return design.replaceAll(oldColor, newColor)
}

export function makeRangoliBorder(char, length) {
  // Agar char string nahi hai ya length positive number nahi hai, return ""
  if(typeof char !== "string" || isNaN(length) || !Number.isInteger(length) || length <= 0) return ""

  // Example: makeRangoliBorder("*", 5) => "*****"
  // Example: makeRangoliBorder("=-", 7) => "=-=-=-="
  let repeatLength = Math.ceil(length/char.length)
  if (repeatLength <= 0 ) repeatLength++;
  return char.repeat(repeatLength).slice(0,length);
}
