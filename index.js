function isPalindrome(word) {
  // Convert the word to lowercase
  const lowercased = word.toLowerCase();

  // Reverse the word
  const reversed = lowercased.split("").reverse().join("");

  // Compare the original word with the reversed word
  return lowercased === reversed;
}

/* 
  Add your pseudocode here
  1. Convert the word to lowercase to handle case insensitivity.
  2. Split the word into an array of characters.
  3. Reverse the array of characters.
  4. Join the reversed array back into a string.
  5. Compare the original word with the reversed word.
  6. Return true if they are the same, otherwise false.
*/

/*
  Add written explanation of your solution here
  The function first converts the input word to lowercase to ensure case insensitivity.
  It then reverses the string by splitting it into an array of characters, reversing the array, and joining it back into a string.
  Finally, it compares the original lowercase word with the reversed string and returns true if they are identical, indicating that the word is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
