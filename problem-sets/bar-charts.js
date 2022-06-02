/**
 * Refactored Horizontal Bar Function
 * 
 * Changes:
 * - replaced nested loop with .repeat method;
 * 
 * Logic:
 * - iterate through array
 * - for each array[i] value:
 *    - print out '-' i times
 * 
 * Time Complexity: 
 *  - o(n) because of single operation loop
 *  - o(n^2) if nested loop wasn't removed
 * Space Complexity: 0 (no variables outside of loop)
 * 
 * @param {*} array 
 * @example  hBar([2, 1, 0, 1, 2, 4, 6])
 */
const hBar = (array) => {
  array.forEach((value) => {
    let row = '';
    let bar = '-';
    row += `${bar.repeat(value)}`;

    console.log(row);
  })
}

hBar([2, 1, 0, 1, 2, 4, 6]);


/**
 * Refactored Vertical Bar Function
 * 
 * Changes:
 * - changed variable names for readability
 * - combined forEach for simplicity
 * 
 * Logic:
 * - obtain max value of array to determine chart height
 * - loop through chart height to print individual rows:
 *    - check current row in loop:
 *        - if 0, print bottom row
 *        - else, print out regular row
 *    - regardless, loop through array values to determine
 *      if bar, whitespace, or border should be populated
 * 
 * Time Complexity: o(n^2) due to nested loop
 * Space Complexity: 1 (chartHeight variable)
 *
 * @param {*} array 
 * @example vBar([2, 1, 0, 1, 2, 4, 6])
 */
 const vBar = (array) => {
  const chartHeight = Math.max(...array);

  // row loop
  // reversed for loop to match how the chart prints
  // in console (top -> bottom)
  for(let row = chartHeight; row >= 0; row--) {
    let bar = '│ ';
    let bottom = '└─';

    // column loop
    // check for not bottom row
    if(row !== 0) {
      array.forEach((value) => {
        if (row === value) {
          bar += ' ┌─┐'
        } else if (row <= value) {
          bar += ' │ │'
        } else {
          bar += '    ';
        }
      });
      console.log(bar)

    // check for bottom row
    } else {
      array.forEach((value) => {
        if (value > 0) {
          bottom += '─┴─┴'
        } else {
          bottom += '────'
        };
      });

      bottom += '─';
      console.log(bottom);   
    }
  };
}

vBar([2, 1, 0, 1, 2, 4, 6]);