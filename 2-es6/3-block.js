// goal - try to hoist something
// goal - try to call a function defined in a block

var a = ['a','b','c'];

for (let i = 0; i < a.length; i++) {
    let x = a[i];
    // var x = a[i];
    console.log(x+" hi");
}

function foo() {
  return "foo";
}
//console.log(x)
console.log(foo());

{
  function foo() {
    return "bar";
  }
  console.log(foo() );
}
