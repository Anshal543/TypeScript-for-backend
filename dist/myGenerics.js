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
