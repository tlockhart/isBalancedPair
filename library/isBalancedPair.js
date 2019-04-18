function isBalancedPair(braces){
    // Step 1: Create the regex.
    // Step 2: Search for regex in the string, and replace it with '', 
    // continue while the regex contains the string.
    // Step 3: If the regex does not appear in the string and the length of the string = 0
    // then the string is balance.  Else if the length is != 0, then the string is unbalanced.

    // console.log("String = ", braces);
      let length = braces.length;
      const regex = /(\(\))|(\[\])|(\{\})/g;

      function isRegexFound() {
        if (regex.test(braces)) {
            return true;
        } else {
            return false;
        }
      } // function

      while (isRegexFound()) {
        braces = braces.replace(regex, '');
        console.log('Braces = ', braces);
      } //while

      if (braces.length === 0) {
          return true;
      }
      else
        return false;
}
module.exports = isBalancedPair;

