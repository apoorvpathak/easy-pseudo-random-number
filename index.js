// index.js

function ranumInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ranumDecimal(min, max){
    return Math.random() * (max - min) + min;
}

function ranumBool(){
    return Math.random() < 0.5;
}


module.exports = {
    ranumInt,
    ranumDecimal,
    ranumBool
}
