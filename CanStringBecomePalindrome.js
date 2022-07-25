/* 
  Given to me (Neil) in an interview
  Given a string
  return whether or not it's possible to make a palindrome out of the string's
  characters.
  What is it about a string that makes it possible for it to become a
  palindrome?
*/

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "adaad";
const expected5 = true;
// Explanation: "daaad" / "adada"

const  str6 = "abc";
const expected6 = false;
// tacocat
// racecar

// one odd number character

/**
 * Determines whether or not it is possible for the string's characters to be
 * rearranged into a palindrome.
 * - Space: O(?).
 * - Time: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str can be rearranged into a palindrome.
 */
function canStringBecomePalindrome(str){
    let new_dict = {};
    if(str == ""){
        return false;
    } else if (str.length == 1){
        return true;
    } else {
        let count = 0;
        for(let i = 0; i < str.length; i++){
            if (! new_dict.hasOwnProperty(str[i])){
                new_dict[str[i]] = 1;
            } else {
                new_dict[str[i]]++;
            }
        }
        for (key in new_dict){
            if(new_dict[key] % 2 !== 0){
                count++;
            }
        }
        return count <= 1
    }
}


console.log(canStringBecomePalindrome(str1));
console.log(canStringBecomePalindrome(str2));
console.log(canStringBecomePalindrome(str3));
console.log(canStringBecomePalindrome(str4));
console.log(canStringBecomePalindrome(str5));
console.log(canStringBecomePalindrome(str6));