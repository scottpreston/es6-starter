// goal - create a subclass of object/class
class Hello {
  constructor() {
    console.log('hello world!');
  }
  world() {
    console.log('same here!')
  }
  foo() {
    console.log('foo')
  }
}

class Howdy extends Hello {
  constructor() {
    super();
    console.log("howdy there!")
  }
  world() {
    super.world()
    console.log("hi hi");
  }
}

class Ola extends Howdy {
  constructor() {
    super();
    console.log('ola')
  }
}

let a = new Ola();
a.world();
a.foo();
