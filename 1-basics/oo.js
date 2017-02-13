var o = {
    foo: function(){
        return 'foo';
    }
};

console.log(o.foo());
o.bar = function(){
    return 'bar';
};
console.log(o.bar());

function oo() {};
var a = new oo();

var o2 = function() {
    var a = 1, b = 2;
     function add() {
         a++;
         b++;
     }
    return {
        foo: function() {
            add();
            return a+b;
        }
    }
}

var oo = new o2();
console.log(oo.foo());
console.log(oo.foo());
var ooo = oo;
console.log(ooo.foo());
var oooo = ooo;
console.log(oooo.foo());