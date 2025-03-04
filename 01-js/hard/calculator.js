/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  result = 0;
  constructor(){
    this.result = 0;
  }
  add(number){
    this.result = this.result + number;
  }
  subtract(number){
    this.result = this.result-number;
  }
  multiply(number){
    this.result = this.result * number
  }
  divide(number){
    try{
      let result = this.result/ number;
      if(!isFinite(result)){
        throw new Error('Division by zero not allowed')
      } 
      this.result = this.result/ number
    }catch (error){
      console.error(error.message);
    }
  }
  clear(){
    this.result = 0;
  }
  getResult(){
    return this.result
  }
  calculate(expression){
    try {
      // Remove extra spaces
      expression = expression.replace(/\s+/g, '');
      
      // Validate the expression (only numbers, operators, and parentheses allowed)
      if (!/^[0-9+\-*/().]+$/.test(expression)) {
          throw new Error("Invalid characters in expression");
      }
      
      // Evaluate the expression safely
      return Function(`'use strict'; return (${expression})`)();
  } catch (e) {
      throw new Error("Invalid mathematical expression");
  }
  }
}

module.exports = Calculator;
