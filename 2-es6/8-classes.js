// goal - create object with constructor
// goal - add method to same object
// goal - call this method

class Hello {
  constructor() {
    console.log('hello world!');
  }
  world() {
    console.log('same here!')
  }
}

let a = new Hello();
a.world();
