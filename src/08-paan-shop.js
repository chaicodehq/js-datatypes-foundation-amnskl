/**
 * 🍃 Paan Shop Menu - Object Transform
 *
 * Khalil Bhai ki paan shop hai jo purani Delhi mein famous hai.
 * Menu system banana hai jisme objects ko merge karna, freeze karna,
 * aur transform karna hai. Object transform ka tour!
 *
 * Methods to explore: Object.assign(), Object.freeze(),
 *   spread operator {...}, Object.entries(), Object.fromEntries()
 *
 * Functions:
 *
 *   1. createPaanOrder(basePaan, customizations)
 *      - Object.assign({}, basePaan, customizations) se NEW order object banao
 *      - Original basePaan ko mutate MAT karo!
 *      - Agar basePaan object nahi hai ya null hai, return {}
 *      - Agar customizations object nahi hai, sirf basePaan ki copy return karo
 *      - Example: createPaanOrder({type:"meetha",price:30}, {extra:"gulkand",price:50})
 *                 => {type:"meetha", price:50, extra:"gulkand"}
 *
 *   2. freezeMenu(menu)
 *      - Object.freeze() se menu ko immutable banao
 *      - Return: frozen object
 *      - Agar menu object nahi hai ya null hai, return {}
 *      - Frozen ke baad koi modification kaam nahi karegi!
 *      - Example: const frozen = freezeMenu({meetha:30}); frozen.meetha = 100; // still 30
 *
 *   3. updatePrices(menu, increase)
 *      - Object.entries() se [key, value] pairs lo
 *      - Har price mein increase add karo
 *      - Object.fromEntries() se wapas object banao
 *      - Return: NEW object (original mat badlo!)
 *      - Agar menu object nahi hai ya increase number nahi hai, return {}
 *      - Example: updatePrices({meetha:30, saada:20}, 10) => {meetha:40, saada:30}
 *
 *   4. mergeDailySpecials(regularMenu, specialsMenu)
 *      - Spread operator {...regularMenu, ...specialsMenu} se merge karo
 *      - specialsMenu ki values override karengi agar same key ho
 *      - Return: NEW merged object
 *      - Agar koi bhi object nahi hai, usse empty {} maan lo
 *      - Example: mergeDailySpecials({meetha:30}, {chocolate:60, meetha:40})
 *                 => {meetha:40, chocolate:60}
 *
 * @example
 *   createPaanOrder({type:"meetha"}, {extra:"gulkand"}) // => {type:"meetha",extra:"gulkand"}
 *   updatePrices({meetha:30, saada:20}, 10)              // => {meetha:40, saada:30}
 */
export function createPaanOrder(basePaan, customizations) {
  // Agar basePaan object nahi hai ya null hai, return {}
  if(typeof basePaan !== "object" || Array.isArray(basePaan) || !basePaan) return {} 
  // Agar customizations object nahi hai, sirf basePaan ki copy return karo
  if(typeof customizations !== "object" || Array.isArray(customizations) || !customizations) return structuredClone(basePaan) 

  // Object.assign({}, basePaan, customizations) se NEW order object banao
  return Object.assign({}, basePaan, customizations)

  // Original basePaan ko mutate MAT karo!
  // Example: createPaanOrder({type:"meetha",price:30}, {extra:"gulkand",price:50})
  //          => {type:"meetha", price:50, extra:"gulkand"}
}

export function freezeMenu(menu) {
  // Agar menu object nahi hai ya null hai, return {}
  if(typeof menu !== "object" || Array.isArray(menu) || !menu) return {}
  // Object.freeze() se menu ko immutable banao
  return Object.freeze(menu);
  // Return: frozen object
  // Frozen ke baad koi modification kaam nahi karegi!
  // Example: const frozen = freezeMenu({meetha:30}); frozen.meetha = 100; // still 30
}

export function updatePrices(menu, increase) {
  // Agar menu object nahi hai ya increase number nahi hai, return {}
  if(typeof menu !== "object" || Array.isArray(menu) || !menu || typeof increase !== "number") return {}
  // Object.entries() se [key, value] pairs lo
  return Object.fromEntries(Object.entries(menu)
    .map(menuItem => {
      menuItem[1] += increase
      return menuItem
    }))
  // Har price mein increase add karo
  // Object.fromEntries() se wapas object banao
  // Return: NEW object (original mat badlo!)
  // Example: updatePrices({meetha:30, saada:20}, 10) => {meetha:40, saada:30}
}

export function mergeDailySpecials(regularMenu, specialsMenu) {
  // Agar koi bhi object nahi hai, usse empty {} maan lo
  if(typeof regularMenu !== "object" || Array.isArray(regularMenu) || !regularMenu) regularMenu = {}
  if(typeof specialsMenu !== "object" || Array.isArray(specialsMenu) || !specialsMenu) specialsMenu = {}
  // Spread operator {...regularMenu, ...specialsMenu} se merge karo
  return {...regularMenu, ...specialsMenu}
  // specialsMenu ki values override karengi agar same key ho
  // Return: NEW merged object
  // Example: mergeDailySpecials({meetha:30}, {chocolate:60, meetha:40})
  //          => {meetha:40, chocolate:60}
}
