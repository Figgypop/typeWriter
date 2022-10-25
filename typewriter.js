const sentence = "hello there from lighthouse labs";
const arraySentence = sentence.split("");

let increment = 0
for (let char of arraySentence) {
    setTimeout(function() {
      process.stdout.write(char)
    }, increment += 50);
  
  }

  setTimeout(function () {
    console.log('');
  }, increment);
  
