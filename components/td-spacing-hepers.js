
/**
 * @typedef {'XS' |'S'| 'M' |'L' | 'XL'} Measurement
 * @typedef {'left' | 'right' | 'top' | 'buttom'} Direction
 */

/**
 * @type {Array <Measurement>}
 */
const MEASUREMENTS = ["XS", "S", "M", "L", "XL"];

/**
 * @type { Array <Direction>}
 */

const DIRECTIONS = ["left", "right", "top", "buttom"];

/**
 * @callback Join
 * @param {string} value1
 * @param {string} value2
 */

/**
 * 
 * @param {Array<string>} array1 
 * @param {Array<string>} array2 
 * @param {Join} [join]
const mergeArrays =(array1 , array2)=>{

}

export const templateString = DIRECTIONS.map((singleDirection) => {
  const result = MEASUREMENTS.map((singleMeasurement) => {
    return `${singleDirection} =${singleMeasurement}`;
  });
  return result;
}).flat()
.map(attribute=>`:host([${attribute}])`)
.map()

console.log(templateString);