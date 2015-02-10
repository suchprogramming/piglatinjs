var pigLatin = function(userWord) {
  var vowels = ["a", "e", "i", "o", "u"]
  var annoying = ["th", "sq", "qu", "sh", "ts", "ex", "eq"]
  var first_two = userWord.slice(0, 2)
  var double_sliced = userWord.slice(2)
  var first_letter = userWord.charAt(0)
  if (annoying.indexOf(first_two) > -1) {
    var with_ay = first_two.concat("ay")
    var annoying_word = double_sliced.concat(with_ay)
    return annoying_word;
  } else if (vowels.indexOf(first_letter) > -1) {
    var new_word = userWord.concat("ay");
    return new_word;
  } else {
    var sliced_word = userWord.slice(1)
    var ay = first_letter.concat("ay")
    var final_word = sliced_word.concat(ay)
    return final_word;
  }
};


$(document).ready(function() {
  $("form#piglatin").submit(function(event) {
    var inputWord = $("input#word").val();
    var result = pigLatin(inputWord);

    $(".result").text(result);

    $("#results").show();
    event.preventDefault();
  });
})
