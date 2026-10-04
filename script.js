    function add7(number) {
      return number + 7;
    }
    console.log(add7(10));

    function multiply(a, b) {
      return a * b;
    }
    console.log(multiply(3, 2));

    
    function capitalize(text) {
      return text[0].toUpperCase() + text.slice(1).toLowerCase();
    }
    console.log(capitalize("abcd"));
    console.log(capitalize("ABCD"));
    console.log(capitalize("Abcd"));
    console.log(capitalize("aBcD"));


    function lastLetter(text) {
      return text.slice(-1)
    }
    console.log(lastLetter('abcd'));