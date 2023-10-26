
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
 export const mergeArrays = (props) => {
    const { array1, array2, join } = props;
  
    const result = array1.flatMap((array1Value) => {
      const inner = array2.map((array2Value) => {
        return join
          ? join(array1Value, array2Value)
          : `${array1Value} ${array2Value}`;
      });
  
      return inner;
    });
    return result;
  };