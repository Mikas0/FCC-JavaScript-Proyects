function palindrome() {
    let str1 = document.getElementById('ubarra').value;
    if (!str1) {
        alert("Escriba algo antes de presionar el botón");
    } else {
        str1.toLowerCase().slice();
        let regexReplace= /[A-Z0-9]/gi;
        let str2 =str1.match(regexReplace);
        let reverseStr=str2.slice().reverse();
        if (reverseStr.join("")===str2.join("")){
            alert("Es un palíndromo");
        } else alert("No es un palíndromo");
    }
  }