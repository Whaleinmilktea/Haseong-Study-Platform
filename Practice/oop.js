// 접근제한자 public
class Computer {
  cpu = "i5"

  constructor (model) {
    this.model = model
  }

  getCpu() {
    return this.cpu // 당연히 자신의 객체 내부에서도 동작!
  }
}

class Macbook extends Computer {
  checkCpu() {
    console.log(`직접 접근 : ${this.cpu}`) // 상속받은 객체에서도 동작!
    console.log(`메서드를 활용한 간접 접근 : ${this.getCpu()}`)
  }
}

const myComputer = new Computer("lg gram 14 inch")
const myMacbook = new Macbook("macbook pro 13 inch")

console.log(myMacbook.checkCpu())
console.log(myMacbook.cpu)
console.log(myComputer.cpu)

// 접근제한자 private 실습
class Car {
  #fuel = 100;

  constructor (model) {
    this.model = model;
  }

  getFuel() {
    return this.#fuel
  }
}

class Suv extends Car {
  drive() {
    // ! console.log(`상속된 모델에서 Private 객체에 접근하려고 한다면? ${this.#fuel}`)
    // ! Property '#fuel' is not accessible outside class 'Car' because it has a private identifier.ts(18013)
  }

  checkFuel() {
    this.getFuel()
  }
} // 상속받은 객체

const myCar = new Car("부가티")
const mySuv = new Suv("랭글러")

console.log(myCar) // Car { model: 'Bugati' }
// ! console.log(myCar.#fuel) / Property '#fuel' is not accessible outside class 'Car' because it has a private identifier.ts(18013)


console.log(mySuv) // Suv { model: '랭글러' }
console.log(mySuv.getFuel()) // 100
// ! console.log(mySuv.#fuel) / Property '#fuel' is not accessible outside class 'Car' because it has a private identifier.ts(18013)


mySuv.drive()

// 접근제한자 protected 실습
