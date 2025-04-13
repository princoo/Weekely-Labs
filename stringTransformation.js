function validateString(str) {
  if (typeof str !== "string") {
    return `Expected a string, got ${typeof str}`;
  }
}

function capitalize(str) {
  const error = validateString(str);
  if (error) return error;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverse(str) {
  const error = validateString(str);
  if (error) return error;
  return str.split("").reverse().join("");
}

function isPalindrome(str) {
  const error = validateString(str);
  if (error) return error;
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

function wordCount(sentence) {
  const error = validateString(sentence);
  if (error) return error;
  const words = sentence.trim().toLowerCase().split(" ");
  const freqObj = {};
  for (const word of words) {
    const cleanWord = word.replace(/[^\w]/g, "");
    if (cleanWord) {
      freqObj[cleanWord] = (freqObj[cleanWord] || 0) + 1;
    }
  }
  return freqObj;
}

function pascalCaseToSnakeCase(str) {
  const camelCase = str.charAt(0).toLowerCase() + str.slice(1);
  return camelCase.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

const exampleString = 'HelloWorld!';



// 1. What are the benefits of pure functions in real-world codebases?

// - pure functions are easier to test
// - pure functions are easier to reason about
// - pure functions are easyly reused when needed
// - pure functions are easy to debug

// 2. How does immutability prevent bugs?
// - avoids unexpected chnages
// - easier Debugging
// - its safe for function reuse since you can reuse function without worring that they can corrupt data

// 3. Compare compose() vs pipe()—which do you prefer and why?

//  personally i prefer pipe because the order of execution is clear (from left to right) which is normally the usual reading direction. so it can eliminate confusion

// 4. In which functions did you struggle to maintain functional purity

// in the ArrayTransformation
// the function of `sqlJoin`