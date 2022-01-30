// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name)
}
destructivelyAppendCat;

function destructivelyPrependCat(name) {
    cats.unshift(name)
}
destructivelyPrependCat;

function destructivelyRemoveLastCat() {
    cats.pop()
}
destructivelyRemoveLastCat;

function destructivelyRemoveFirstCat() {
    cats.shift()
}
destructivelyRemoveFirstCat;

function appendCat(name) {
    return[...cats, name]
}
appendCat;

function prependCat(name) {
    return[name,...cats]
}
function removeLastCat() {
    return cats.slice(0,-1)
}
removeLastCat;

function removeFirstCat() {
    return cats.slice(1)
}
removeFirstCat;