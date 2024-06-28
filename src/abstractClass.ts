abstract class AbstractClass {
  abstract abstractMethod(): void;
  normalMethod(): void {
    console.log('Normal method');
  }
}

class ConcreteClass extends AbstractClass {
    constructor() {
        super();
        this.abstractMethod();
        this.normalMethod();
    }
  abstractMethod(): void {
    console.log('Abstract method');
  }
}

const concreteClass = new ConcreteClass();