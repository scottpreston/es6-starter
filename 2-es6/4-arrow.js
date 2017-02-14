// goal - understand callbacks
// goal - understand new syntax by creating one with timeout

// old way
function adder(i) {
  return i + 1;
}
console.log(adder(1));


// // as callback
function ajax(cb) {
  setTimeout(function() {
    console.log(cb(1));
  },1000);
}

// //invoke old way
ajax(function(arg) {
  return arg + 1;
});

// // arrow version
ajax(v => v + 1)
