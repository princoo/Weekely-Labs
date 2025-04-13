function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverse(str){
   return str.split("").reverse().join("");
}

function isPalindrome(str){
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

function wordCount(sentence){
    const words = sentence.trim().toLowerCase().split(" ")
    const freqObj = {}
    for(const word of words){
        const cleanWord = word.replace(/[^\w]/g,"")
        if(cleanWord){
            freqObj[cleanWord] = (freqObj[cleanWord] || 0) + 1;     
        }
    }
    return freqObj
}

function pascalCaseToSnakeCase(str) {
    const camelCase = str.charAt(0).toLowerCase() + str.slice(1);
    return camelCase.replace(/[A-Z]/g,(letter) => `_${letter.toLowerCase()}`);

}

// const exampleString = "john  doeee";

// console.log(wordCount(exampleString));