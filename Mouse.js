
function Mouse(name) {
    this.name = name
    this.isDead = false
}
Mouse.prototype.die = function () {
    this.isDead = true
}
Mouse.prototype.run = function(){
    console.log("Running");
Mouse.prototype.sleep = function(){
    console.log("Slepping");
}
module.exports = Mouse