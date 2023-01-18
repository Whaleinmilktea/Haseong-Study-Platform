// 원래 객체는 일일이 만들어줘야 했다.
// 하지만, 어플리케이션이 고도화 됨에 따라 일일이 객체를 만들고 수정하기가 부담스러워졌고,
// 이에 따라 일종의 기준(class)을 사람이 정해주면, 객체가 이에 맞게 생성되는 형식이 등장했다.

// new 키워드


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

