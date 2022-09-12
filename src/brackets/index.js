/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
          console.log(str
            )
    let store = [];
    for (let i = 0; i < str.length; i++){
      if (str[i] === '{' || str[i] === '[' || str[i] === '(' ) {
        store.push(str[i]);
      } else if (str[i] === '}' && store.pop() != '{'){
          return 'invalid';
      } else if (str[i] === ']' && store.pop() != '[') {
           return 'invalid';
      } else if (str[i] === ')' && store.pop() != '('){
             return 'invalid';
      }
    
    }
       return store.length > 0 ? 'invalid' : 'valid';
    
  };



module.exports = isValid;
