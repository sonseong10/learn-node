function hello() {
  console.log("---function---")
  console.log(this)
  console.log(this === global)
}

hello()

class A {
  constructor(num) {
    this.num = num
  }
  memberFun() {
    console.log("---class---")
    console.log(this)
    console.log(this === global)
  }
}

const a = new A(3)
a.memberFun()

console.log(`---global---`)
console.log(this)
console.log(this === global)
console.log(this === module.exports)
