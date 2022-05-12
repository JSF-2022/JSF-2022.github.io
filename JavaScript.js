var randomAdd = function(flag, char) {
  randNumber = char;
  randNumber = Math.floor(Math.random() * 52);
  $(".animation-text").empty();
  if (flag) {
    $(".animation-text").text(base + char);
  } else {
    $(".animation-text").text(base + alphabet[randNumber]);
  }
};

var textAnimation = function() {
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let text = ["J", "a", "p", "a", "n", "S", "c", "r", "a", "t", "c", "h", "e", "r", "s", "F", "e", "s"];
  let base = "";
  let randNumber;
  for (let i = 0; i <= text.length - 1; i++) {
    setTimeout(function() {
      for (let j = 1; j <= 4; j++) {
        setTimeout(function() {
          randomAdd(j == 4, text[i]);
        }, j * 30);
      }
      if (i != text.length - 1) {
        base += text[i];
      }
      console.log(i);
    }, i * 30);
  }
};

console.log("♪　∧,＿∧　　♪\n　　( ´･ω･) ))\n　(( (　つ　ヽ、　　　♪\n　　〉 とノ　)))\n　（__ノ^(＿)");
console.log("モナーのAAの出典：https://w.atwiki.jp/aapose/pages/83.html")

$(function() {
  textAnimation();
});
