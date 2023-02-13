const { default: chalk } = require("chalk");
function Dog() {
    this.stomach = []
}
Dog.prototype.eat = function (cat) {
    this.stomach.push(cat)
}
Dog.prototype.sayHi = function (name) {
    console.log('HI! I am a dog. My name is ' + chalk.pink(this.name));
}