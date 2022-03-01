// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    cats.push("Ralph");
}

function destructivelyPrependCat(){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(){
   const copyOfCats = [...cats,"Broom"];
    return copyOfCats
}

function prependCat(){
    const blam = ["Arnold",...cats];
    return blam
}

function removeLastCat() {
    const blam2 = cats.slice(0,cats.length - 1);
    return blam2;
}

function removeFirstCat(){
    const blam3 = cats.slice(1);
    return blam3;
}