"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identity(val) {
    return val;
}
//  like any but the input type and the return type automatically becomes type input (LOCKING THE VALUE)
function identityThree(val) {
    return val;
}
identityThree(true);
function identityFour(val) {
    return val;
}
class CocaBottle {
    constructor(brand, type) {
        this.brand = brand;
        this.type = type;
    }
}
const coke = new CocaBottle("cocacola", 6);
identityFour(coke);
