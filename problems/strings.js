/**
 * Returns the first character of a string passed in.
 * @param {string} - str
 * @returns {string} - first char
 */
const firstChar = (str) => {
  return str.slice(0, 1);
};

/**
 * Returns the length of a string
 * @param {string} - str
 * @returns {number} - length of string
 */

const stringLength = (str) => {
  return str.length;
};

/**
 * Returns the last character of any string
 * @param {string} - str
 * @returns {string} - last letter
 */

const lastLetter = (str) => {
  return str.slice(str.length - 1);
};

/**
 * Takes a single string variable and returns a copy of the string with the
 * letter capitalized.
 * @param {string} - str 'jimmy'
 * @returns {string} - 'jimmY'
 */

const capitalizeLastLetter = (str) => {
  return str.slice(0, str.length - 1) + str.slice(str.length - 1).toUpperCase();
};

/**
 *  Create a drEvil function that will take a single number variable, and log the '<variableAmount> dollars',
and should add '(pinky)' at the end of the amount if it's 1 million or more. For example:

```js
let amount = 10
// => 10 dollars
let amount = 1000000
// =>  1000000 dollars (pinky)
```
* @param {number}
* @returns {string}
 */
const drEvil = (number) => {
  if (number < 1000000) {
    return number + ` dollars`;
  }
  return number + ` dollars (pinky)`;
};

/**
 * 
 * Create a `verbing` function.
 * It should take a single string variable. 
 * If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', 
 * in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. 
 * @param {string}
 * @returns {string}
For example:

```js
verbing('box')
// => 'boxing'
verbing('train')
// => 'training'
verbing('swimming')
// =>  'swimmingly'
verbing('go')
// =>  'go'
```
 
 */

const verbing = (string) => {
  if (string.length >= 3 && string.slice(string.length - 1) === "g") {
    return string + `ly`;
  } else if (string.length >= 3) {
    return string + `ing`;
  } else {
    return string;
  }
};

/**
 * Takes a single sentence and returns a copy of the string without the
 * last word.
 * @param {string}
 * @returns {string}
 */

const removeLastWord = (str) => {
  let arr = str.split(" ");
  arr.pop();
  return arr.join(" ").toLocaleString();
};

/**
 * Takes a string and returns a new string that has only the even
 * indexed characters.
 * Do NOT split the string into an array.
 * @param {string}
 * @returns {string}
 */

const everyOtherLetter = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i += 2) {
    newStr += str[i];
  }
  return newStr;
};

/**
 * Takes in a string and returns a new string that has all the vowels removed.
 * @param {string}
 * @returns {string}
 */
const disemvowel = (str) => {
  //  let newStr = ""
  // for (let i = 0; i < str.length; i++) {
  //   let currChar = str[i];
  //   if (currChar !== "a" && currChar !== "e" && currChar !== "i" && currChar !== "o" && currChar !== "u" && currChar !== "A" && currChar !== "E" && currChar !== "I" && currChar !== "O" && currChar !== "U"  ) {
  //     newStr += currChar;
  //   }
  // }
  // return newStr;

  let vowels = "aeiouAEIOU";
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      newStr += str[i];
    }
  }
  return newStr;
};

/**
 * Takes a string sentence and returns a new sentence.
 * Any word that has a length of 5 or more characters should be disemvoweled.
 * @param {string}
 * @returns {string}
 */

const disemvowelLongWords = (str) => {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= 5) {
      arr[i] = disemvowel(arr[i])
    }
    
  }
  return arr.join(" ")
}

/**
 * Takes in a string and returns the middle char.
 * If there is no character in the middle return the middle two characters
 * @param {string}
 * @returns {string}
 */
const middleCharacter = (str) => {
  let middleIndex = Math.floor(str.length / 2)
  if (str.length % 2 === 1) {
    return str[middleIndex]
  } else {
    return str[middleIndex - 1] + str[middleIndex]
  }
}

/**
 * Takes in a string and reverses it.
 * Do not use split
 * @param {string}
 * @returns {string}
 */

const reverseString = (str) => {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

/**
 * Takes in a sentence string and reverses each word but not the
 * order of the words.
 * @param {string}
 * @returns {string}
 */

const reverseSentenceWords = (str) => {
  let arr = str.split("");
  let reverseArr = arr.reverse();
  let joinReverse = reverseArr.join("");
  let reverseSplit = joinReverse.split(" ");
  let splitReverse = reverseSplit.reverse();
  let newStr = splitReverse.join(" ");
  return newStr;
}

module.exports = {
  firstChar,
  stringLength,
  lastLetter,
  capitalizeLastLetter,
  drEvil,
  verbing,
  removeLastWord,
  everyOtherLetter,
  disemvowel,
  disemvowelLongWords,
  middleCharacter,
  reverseString,
  reverseSentenceWords,
};
