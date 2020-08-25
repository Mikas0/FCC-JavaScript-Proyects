function telephoneCheck() {
    let str = document.getElementById("ubarra").value;
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    /**
>   ^ denotes the beginning of the string.
>   (1\s?)? allows for “1” or "1 " if there is one.
>   \d{n} checks for exactly n number of digits so \d{3} checks for three digits.
>   the | (OR) operator checks for either x OR y so (\(\d{3}\)|\d{3}) checks for either three digits 
    surrounded by parentheses, or three digits by themselves with no parentheses.
>   [\s\-]? checks for spaces or dashes between the groups of digits.
>   $ denotes the end of the string. In this case the beginning ^ and end of the string $ 
    are used in the regex to prevent it from matching any longer string that might contain
    a valid phone number (eg. “s 555 555 5555 3”).
>   Lastly we use regex.test(str) along with an IF conditional to check its result and return a 
    corresponding alert to the user.
    */
    if (regex.test(str)){
        return alert ("Es un número de teléfono perteneciente a los Estados Unidos.")
    } else return alert("Es un número que no pertenece a Estados Unidos.");
}