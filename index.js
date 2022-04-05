// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(cat){
    cats.push(cat);
    return cats;
};

function destructivelyPrependCat(cat){
    cats.unshift(cat);
    return cats;
};

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
};

function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
};

function appendCat(cat){
    let newCats = [...cats, cat];
    return newCats;
};

function prependCat(cat){
    let newCats = [cat, ...cats];
    return newCats;
};

function removeLastCat(){
    let newCats = [...cats]
    newCats.pop()
    return newCats;
};

function removeFirstCat(){
    let newCats = [...cats]
    newCats.shift()
    return newCats;
};
