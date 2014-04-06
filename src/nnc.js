var CHAR_MAP = {
  'a' : 1,
  'b' : 2,
  'c' : 3,
  'd' : 4,
  'e' : 5,
  'f' : 6,
  'g' : 7,
  'h' : 8,
  'i' : 9,
  'j' : 10,
  'k' : 11,
  'l' : 12,
  'm' : 13,
  'n' : 14,
  'o' : 15,
  'p' : 16,
  'q' : 17,
  'r' : 18,
  's' : 19,
  't' : 20,
  'u' : 21,
  'v' : 22,
  'w' : 23,
  'x' : 24,
  'y' : 25,
  'z' : 26
};

var hebrew = function (word) {
  var total = 0;
  for (var i = 0, len = word.length; i < len; i = i + 1) {
    if (word[i] === ' ') { return total; }
    total = total + CHAR_MAP[word.charAt(i).toLowerCase()];
  }
  return total;
};

var english = function () {};

var simple = function () {};

module.exports = {
  hebrew: hebrew,
  english: english,
  simple: simple
};