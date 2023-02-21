var Cat = require('./Cat');
var Mouse = require('./Mouse');
var Dog = require('./Dog');

var cat = new Cat('Tom');
var mouse = new Mouse('Mickey');
var dog = new Dog('Mino');
try {
    cat.eat(dog);
} catch (error){
    console.log('Error while cat eating dog');
}

// cat.eat(dog);
console.log(cat);