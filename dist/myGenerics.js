"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
identityOne("1");
function identityTwo(val) {
    return val;
}
identityTwo({ name: "John", age: 23 });
function getSearchProducts(products) {
    return products[3];
}
getSearchProducts([{ name: "John", age: 23 }]);
const getSearchProductsTwo = (products) => {
    return products;
};
function anotherFunction(val1, val2) {
    return { val1, val2 };
}
anotherFunction("John", { connnection: "Connected", id: 1 });
class Sellable {
    constructor(product) {
        this.cart = [];
        this.cart.push(product);
    }
}
