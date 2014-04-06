(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var nnc = require('./nnc');

// if (typeof document === 'undefined') {
//   var document = {
//     getElementById: function () {
//       return 'placeholder text';
//     }
//   };
// }
var input = window.document.getElementById('nnc-input');
var output = window.document.getElementById('nnc-output');

input.onkeyup = function change() {
  console.log('val: ', input.value);
  var words = input.value.split(' ');
  var string = '';
  for (var i = 0, len = words.length; i < len; i = i + 1) {
    string = string + ' '  + nnc.hebrew(words[i]);
  }
  output.innerHTML = string;
};
},{"./nnc":2}],2:[function(require,module,exports){
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvdXNyL2xpYi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL2hvbWUvbmtqL2NvZGUvbnVtZXJvbG9neS1uYW1lLWNvdW50ZXIvc3JjL2FwcC5qcyIsIi9ob21lL25rai9jb2RlL251bWVyb2xvZ3ktbmFtZS1jb3VudGVyL3NyYy9ubmMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBubmMgPSByZXF1aXJlKCcuL25uYycpO1xuXG4vLyBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuLy8gICB2YXIgZG9jdW1lbnQgPSB7XG4vLyAgICAgZ2V0RWxlbWVudEJ5SWQ6IGZ1bmN0aW9uICgpIHtcbi8vICAgICAgIHJldHVybiAncGxhY2Vob2xkZXIgdGV4dCc7XG4vLyAgICAgfVxuLy8gICB9O1xuLy8gfVxudmFyIGlucHV0ID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdubmMtaW5wdXQnKTtcbnZhciBvdXRwdXQgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25uYy1vdXRwdXQnKTtcblxuaW5wdXQub25rZXl1cCA9IGZ1bmN0aW9uIGNoYW5nZSgpIHtcbiAgY29uc29sZS5sb2coJ3ZhbDogJywgaW5wdXQudmFsdWUpO1xuICB2YXIgd29yZHMgPSBpbnB1dC52YWx1ZS5zcGxpdCgnICcpO1xuICB2YXIgc3RyaW5nID0gJyc7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSB3b3Jkcy5sZW5ndGg7IGkgPCBsZW47IGkgPSBpICsgMSkge1xuICAgIHN0cmluZyA9IHN0cmluZyArICcgJyAgKyBubmMuaGVicmV3KHdvcmRzW2ldKTtcbiAgfVxuICBvdXRwdXQuaW5uZXJIVE1MID0gc3RyaW5nO1xufTsiLCJ2YXIgQ0hBUl9NQVAgPSB7XG4gICdhJyA6IDEsXG4gICdiJyA6IDIsXG4gICdjJyA6IDMsXG4gICdkJyA6IDQsXG4gICdlJyA6IDUsXG4gICdmJyA6IDYsXG4gICdnJyA6IDcsXG4gICdoJyA6IDgsXG4gICdpJyA6IDksXG4gICdqJyA6IDEwLFxuICAnaycgOiAxMSxcbiAgJ2wnIDogMTIsXG4gICdtJyA6IDEzLFxuICAnbicgOiAxNCxcbiAgJ28nIDogMTUsXG4gICdwJyA6IDE2LFxuICAncScgOiAxNyxcbiAgJ3InIDogMTgsXG4gICdzJyA6IDE5LFxuICAndCcgOiAyMCxcbiAgJ3UnIDogMjEsXG4gICd2JyA6IDIyLFxuICAndycgOiAyMyxcbiAgJ3gnIDogMjQsXG4gICd5JyA6IDI1LFxuICAneicgOiAyNlxufTtcblxudmFyIGhlYnJldyA9IGZ1bmN0aW9uICh3b3JkKSB7XG4gIHZhciB0b3RhbCA9IDA7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSB3b3JkLmxlbmd0aDsgaSA8IGxlbjsgaSA9IGkgKyAxKSB7XG4gICAgaWYgKHdvcmRbaV0gPT09ICcgJykgeyByZXR1cm4gdG90YWw7IH1cbiAgICB0b3RhbCA9IHRvdGFsICsgQ0hBUl9NQVBbd29yZC5jaGFyQXQoaSkudG9Mb3dlckNhc2UoKV07XG4gIH1cbiAgcmV0dXJuIHRvdGFsO1xufTtcblxudmFyIGVuZ2xpc2ggPSBmdW5jdGlvbiAoKSB7fTtcblxudmFyIHNpbXBsZSA9IGZ1bmN0aW9uICgpIHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaGVicmV3OiBoZWJyZXcsXG4gIGVuZ2xpc2g6IGVuZ2xpc2gsXG4gIHNpbXBsZTogc2ltcGxlXG59OyJdfQ==
