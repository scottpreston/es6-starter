export class Foo {
    constructor(bar="bar") {
        this.bar = bar;
    }
    print() {
        console.log(this.bar);
    }
    getIt() {
        return this.bar;
    }
}