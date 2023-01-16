class Person {
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum () {
        return this.first + this.second;
    }
}

let kim = new Person('kim',10,10);

