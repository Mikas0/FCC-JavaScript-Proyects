function rot13() {
    let str = document.getElementById("ubarra").value;
    let result = str
         // Split str into a character array
         .split("")
         // Iterate over each character in the array
         .map.call(str, function(char) {
           // Convert char to a character code
           var x = char.charCodeAt(0);
           // Checks if character lies between A-Z, a-z, and also checks for [], \, ^, _ and `
           if (x < 65 || x > 122) {
             return String.fromCharCode(x); // Return un-converted character
           }
           //[ = ASCII 91, if the character code is less than 91, shift backward 13 places
           else if (x < 91) {
             return String.fromCharCode(x + 13);
           }
           // Otherwise shift the character 13 places forward
           else if (x > 96){
             return String.fromCharCode(x - 13);
           }
           // If between ASCII 91 & 96 then leave as is
           else return String.fromCharCode(x);
         })
         // Rejoin the array into a string
         .join("");
    return alert(`Tu encriptación está completa, el resultado es ${result}`)
   }