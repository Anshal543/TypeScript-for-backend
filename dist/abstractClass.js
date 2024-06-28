"use strict";
class AbstractClass {
    normalMethod() {
        console.log('Normal method');
    }
}
class ConcreteClass extends AbstractClass {
    constructor() {
        super();
        this.abstractMethod();
        this.normalMethod();
    }
    abstractMethod() {
        console.log('Abstract method');
    }
}
const concreteClass = new ConcreteClass();
