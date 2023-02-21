const calcInput = document.querySelector('.calc-input')
const allButtons = document.querySelectorAll('.button')
const equalButton = document.querySelector('.equal')
const operand = ['+','-','*','/']

allButtons.forEach(button =>{
    button.addEventListener('click' , (e) =>{
        const value = e.target.dataset.value
            calcInput.innerText += value
        

        if(value == 'clear'){
            calcInput.innerText = ''
        }
    })
})


equalButton.addEventListener("click", (e) => {
  if (calcInput.innerText.includes("/")) {
    const split = calcInput.innerText.split("/");
    operate("/", split[0], split[1]);
  }
  if (calcInput.innerText.includes("+")) {
    const split = calcInput.innerText.split("+");
    operate("+", split[0], split[1]);
  }
  if (calcInput.innerText.includes("*")) {
    const split = calcInput.innerText.split("*");
    operate("*", split[0], split[1]);
  }
  if (calcInput.innerText.includes("-")) {
    const split = calcInput.innerText.split("-");
    operate("-", split[0], split[1]);
  }
});


const operate = (operator , num1 , num2) =>{
    const a = Number(num1)
    const b = Number(num2)

    if(operator == '-'){
        calcInput.innerText = a - b

    }
    if(operator == '+'){
        calcInput.innerText = a + b
    }
    if(operator == '*'){
        calcInput.innerText = a * b
    }
    if(operator == '/'){
        calcInput.innerText = a / b
    }
}