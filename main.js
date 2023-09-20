const input1 = document.querySelector(".num1");
const input2 = document.querySelector(".num2");

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");

const signContainer = document.querySelector(".sign");

const result = document.querySelector(".result");

let num1;
let num2;
let sign;

const calculate = function () {
  switch (sign) {
    case "+":
      return (result.textContent = num1 + num2);

    case "-":
      return (result.textContent = num1 - num2);

    case "*":
      return (result.textContent = num1 * num2);

    case ":":
      if (num2 === 0) {
        return (result.textContent = "Cannot divide by zero");
      } else {
        return (result.textContent = num1 / num2);
      }

    default:
      return (result.textContent = "Invalid operator");
  }
};

input1.addEventListener("input", function () {
  num1 = parseInt(input1.value);

  if (num1 != undefined && num2 != undefined && sign != undefined) {
    calculate();
  }

  if (isNaN(num1) || isNaN(num2)) {
    result.textContent = "";
  }
});

input2.addEventListener("input", function () {
  num2 = parseInt(input2.value);

  if (num1 != undefined && num2 != undefined && sign != undefined) {
    calculate();
  }

  if (isNaN(num1) || isNaN(num2)) {
    result.textContent = "";
  }
});

const signHandler = function (signValue) {
  signValue.addEventListener("click", function () {
    sign = signValue.textContent;
    signContainer.textContent = signValue.textContent;

    calculate();

    if (isNaN(num1) || isNaN(num2)) {
      result.textContent = "";
    }
  });
};

signHandler(plus);
signHandler(minus);
signHandler(multiply);
signHandler(divide);
