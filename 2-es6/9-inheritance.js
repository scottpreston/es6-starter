// goal - create a subclass of object/class
class Hello {
  constructor() {
    console.log('hello world!');
  }
  world() {
    console.log('same here!')
  }
}

class Howdy extends Hello {
  constructor() {
    super();
    console.log("howdy there!")
  }
}

let a = new Howdy();
a.world();
