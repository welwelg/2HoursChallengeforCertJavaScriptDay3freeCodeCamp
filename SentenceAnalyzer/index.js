function getVowelCount(sentence) {
  let count = 0;
  const vowels = 'aeiou';

  for (let char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

const vowelCount = getVowelCount("Apple are tasty fruits.");
console.log(`Vowel Count: ${vowelCount}`); 

function getConsonantCount(sentence) {
    let count = 0;
    const vowels = "aeiou";

    for (let char of sentence.toLowerCase()){
        if (char >= "a" && char <= "z" && !vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

const consonantCount = getConsonantCount("Coding if fun");
console.log(`Consonant Count: ${consonantCount}`);

function getPunctuationCount(sentence) {
    let count = 0;

    for (let char of sentence) {
        if(!(char >= "a" && char <= "z") &&
           !(char >= "A" && char <= "Z") &&
           char !== " ") {
               count++;
        }
    }
    return count;
}

const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);

function getWordCount(sentence) {
  const words = sentence.trim().split(/\s+/);

  if (words[0] === "") return 0;
  return words.length;
}

const wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`);