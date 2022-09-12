/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {

    let romanStr = roman.split('');
    const romanNum = {
        'I' : 1,
         'IV': 4,
        'V': 5,
        'X' : 10,
       'L': 50,
        'C' : 100,
        'D': 500,
        'M' : 1_000
    }

     let count = 0;

     for (let i = 0; i < romanStr.length; i++) {
            let curr = romanNum[romanStr[i]];
            let next = romanNum[romanStr[i + 1]];
            if (curr < next) {
                count -= curr;
            } else {
                count += curr;
            }
        }
        return count;
     }
   
module.exports = romanToDecimal;
