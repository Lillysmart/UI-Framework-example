
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
 * @param {object} props
 * @param {Array<string>} props.array1 
 * @param {Array<string>} props.array2 
 * @param {Join} [props.join]
  */
const mergeArrays =(props)=>{
const {array1, array2 ,join} = props
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