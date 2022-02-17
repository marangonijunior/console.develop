/**
 * Anagram is about check two word if contain the same words
 * @param {string} string_a : String
 * @param {string} string_b : String
 * @returns {boolean} returning if the words are anagram
 */

function anagram(string_a, string_b) {
  if(string_a.length !== string_b.length){
    return false;
  }

  const lookup = {};

  for(let idx = 0; idx < string_a.length; idx++){
    let letter = first[idx];
    lookup[letter] ? lookup[letter] +=1 : lookup[letter] = 1;
  }

  for(let idx = 0; string_b.length; idx++){
    if(!lookup[letter]){
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}