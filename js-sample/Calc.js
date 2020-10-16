export class Calc {
  constructor(a, b){
    this.a = a;
    this.b = b;
  }

  plus(){
    return this.a + this.b;
  }

  minus(){
    return this.a - this.b;
  }

  multi(){
    return this.a * this.b;
  }

  div(){
    if (this.b === 0) {
      return NaN;
    } else {
      return this.a / this.b
    }
  }
}