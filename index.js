function reverseString(word) {
    const wordArray = word.split("");
    const reversedWordArray = wordArray.reverse();
    const reversedWord = reversedWordArray.join("");

    return reversedWord;

}

function isPalindrome(word) {
    // Write your algorithm here
    const reverseWord = reverseString(word);
    if (word === reverseWord) {
        return true;
    } else {
        return false;
    }
}




/* 
palindrome a word sentence spelt the same way both forward and backward ignoring puncuation cases and spaces.
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
    // add your own custom tests in here
    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));


    console.log("");

    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
    console.log("");

    console.log("Expecting: true");
    console.log("=>", isPalindrome("mom"));

    console.log("");

    console.log("Expecting: true");
    console.log("=>", isPalindrome("abba"));

    console.log("");

    console.log("Expecting: true");
    console.log("=>", isPalindrome("a"));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", isPalindrome("hi"));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;