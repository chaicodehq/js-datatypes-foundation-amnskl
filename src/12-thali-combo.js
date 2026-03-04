/**
 * 🍽️ Thali Combo Platter - Mixed Methods Capstone
 *
 * Grand Indian Thali restaurant mein combo platter system banana hai.
 * String, Number, Array, aur Object — sab methods mila ke ek complete
 * thali banao. Yeh capstone challenge hai — sab kuch combine karo!
 *
 * Data format: thali = {
 *   name: "Rajasthani Thali",
 *   items: ["dal baati", "churma", "papad"],
 *   price: 250,
 *   isVeg: true
 * }
 *
 * Functions:
 *
 *   1. createThaliDescription(thali)
 *      - Template literal, .join(", "), .toUpperCase(), .toFixed(2) use karo
 *      - Format: "{NAME} (Veg/Non-Veg) - Items: {items joined} - Rs.{price}"
 *      - name ko UPPERCASE karo, price ko 2 decimal places tak
 *      - isVeg true hai toh "Veg", false hai toh "Non-Veg"
 *      - Agar thali object nahi hai ya required fields missing hain, return ""
 *      - Required fields: name (string), items (array), price (number), isVeg (boolean)
 *      - Example: createThaliDescription({name:"Rajasthani Thali", items:["dal","churma"], price:250, isVeg:true})
 *                 => "RAJASTHANI THALI (Veg) - Items: dal, churma - Rs.250.00"
 *
 *   2. getThaliStats(thalis)
 *      - Array of thali objects ka stats nikalo
 *      - .filter() se veg/non-veg count
 *      - .reduce() se average price
 *      - Math.min/Math.max se cheapest/costliest
 *      - .map() se saare names
 *      - Return: { totalThalis, vegCount, nonVegCount, avgPrice (2 decimal string),
 *                  cheapest (number), costliest (number), names (array) }
 *      - Agar thalis array nahi hai ya empty hai, return null
 *
 *   3. searchThaliMenu(thalis, query)
 *      - .filter() + .includes() se search karo (case-insensitive)
 *      - Thali match karti hai agar name ya koi bhi item query include kare
 *      - Agar thalis array nahi hai ya query string nahi hai, return []
 *      - Example: searchThaliMenu(thalis, "dal") => thalis with "dal" in name or items
 *
 *   4. generateThaliReceipt(customerName, thalis)
 *      - Template literals + .map() + .join("\n") + .reduce() se receipt banao
 *      - Format:
 *        "THALI RECEIPT\n---\nCustomer: {NAME}\n{line items}\n---\nTotal: Rs.{total}\nItems: {count}"
 *      - Line item: "- {thali name} x Rs.{price}"
 *      - customerName UPPERCASE mein
 *      - Agar customerName string nahi hai ya thalis array nahi hai/empty hai, return ""
 *
 * @example
 *   createThaliDescription({name:"Rajasthani Thali", items:["dal"], price:250, isVeg:true})
 *   // => "RAJASTHANI THALI (Veg) - Items: dal - Rs.250.00"
 */
export function createThaliDescription(thali) {
  // Template literal, .join(", "), .toUpperCase(), .toFixed(2) use karo
  // Format: "{NAME} (Veg/Non-Veg) - Items: {items joined} - Rs.{price}"
  // name ko UPPERCASE karo, price ko 2 decimal places tak
  // isVeg true hai toh "Veg", false hai toh "Non-Veg"
  // Agar thali object nahi hai ya required fields missing hain, return ""
  // Required fields: name (string), items (array), price (number), isVeg (boolean)
  // Example: createThaliDescription({name:"Rajasthani Thali", items:["dal","churma"], price:250, isVeg:true})
  //          => "RAJASTHANI THALI (Veg) - Items: dal, churma - Rs.250.00"
  if(typeof thali !== "object" || thali === null) return ""

  const {name, items, price, isVeg} = thali;

  if(name === undefined || items === undefined || price === undefined || isVeg === undefined) return ""

  if(!Array.isArray(items) || items.length === 0) return ""

  return `${name.toUpperCase()} (${isVeg?'Veg':'Non-Veg'}) - Items: ${items.join(", ")} - Rs.${price.toFixed(2)}`
}

export function getThaliStats(thalis) {
  // Agar thalis array nahi hai ya empty hai, return null
  if(!Array.isArray(thalis) || thalis.length === 0) return null
  // Array of thali objects ka stats nikalo
  // .filter() se veg/non-veg count
  // .reduce() se average price
  // Math.min/Math.max se cheapest/costliest
  // .map() se saare names
  // Return: { totalThalis, vegCount, nonVegCount, avgPrice (2 decimal string),
  //           cheapest (number), costliest (number), names (array) }



//  * Data format: thali = {
//  *   name: "Rajasthani Thali",
//  *   items: ["dal baati", "churma", "papad"],
//  *   price: 250,
//  *   isVeg: true
//  * }
const totalThalis = thalis.length;
const vegCount = thalis.filter(thali => thali.isVeg).length;
const nonVegCount = thalis.filter(thali => !thali.isVeg).length;
const avg = (thalis.reduce((total, thali) => total + thali.price, 0))/totalThalis;
const avgPrice = avg.toFixed(2)
const cheapest = Math.min(...thalis.map(thali => thali.price));
const costliest = Math.max(...thalis.map(thali => thali.price));
const names = thalis.map(thali => thali.name);

  return {
    totalThalis,
    vegCount,
    nonVegCount,
    avgPrice,
    cheapest,
    costliest,
    names
  }
}

export function searchThaliMenu(thalis, query) {
  // Agar thalis array nahi hai ya query string nahi hai, return []
  if(!Array.isArray(thalis) || thalis.length === 0 || typeof query !== "string" || !query) return []
  // .filter() + .includes() se search karo (case-insensitive)
  // Thali match karti hai agar name ya koi bhi item query include kare
  // Example: searchThaliMenu(thalis, "dal") => thalis with "dal" in name or items
  return thalis.filter(thali => thali.name.toLowerCase().includes(query.toLowerCase()) || thali.items.some(item => item.toLowerCase().includes(query.toLowerCase())))

//  * Data format: thali = {
//  *   name: "Rajasthani Thali",
//  *   items: ["dal baati", "churma", "papad"],
//  *   price: 250,
//  *   isVeg: true
//  * }
}

export function generateThaliReceipt(customerName, thalis) {
  // Agar customerName string nahi hai ya thalis array nahi hai/empty hai, return ""
  if(typeof customerName !== "string" || !customerName || !Array.isArray(thalis) || thalis.length === 0) return ""
  // Template literals + .map() + .join("\n") + .reduce() se receipt banao
  // Format:
  // "THALI RECEIPT\n---\nCustomer: {NAME}\n{line items}\n---\nTotal: Rs.{total}\nItems: {count}"
  // Line item: "- {thali name} x Rs.{price}"
  // customerName UPPERCASE mein

  const details = thalis.reduce((details, thali) => {
    details.total = details.total + thali.price;
    details.lineItem = details.lineItem + `- ${thali.name} x Rs.${thali.price}`
    return details;
  }, {total: 0, lineItem : ""})
  return `THALI RECEIPT\n---\nCustomer: ${customerName.toUpperCase()}\n${details.lineItem}\n---\nTotal: Rs.${details.total}\nItems: ${thalis.length}`
  //  * Data format: thali = {
//  *   name: "Rajasthani Thali",
//  *   items: ["dal baati", "churma", "papad"],
//  *   price: 250,
//  *   isVeg: true
//  * }
}
