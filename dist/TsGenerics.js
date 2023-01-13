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
// Taking type as array
function getSearchProducts(products) {
    const myIndex = 3;
    return products[myIndex]; /**one of the values in the array */
}
// "<T,>" means this is not a JSX or TSX rather generics in TS
const getMoreSearchProducts = (products) => {
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherFunction(3, { connection: "", username: "", password: "" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
