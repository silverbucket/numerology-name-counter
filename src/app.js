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