const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)

const formEl = document.getElementById('form')
const inputEl = document.getElementById('input')
const questionEl = document.getElementById('question')
const scoreEl = document.getElementById('score')
questionEl.innerText = `what is ${num1} multiplied by ${num2}?`

let score=JSON.parse(localStorage.getItem("score"))
if (!score){
  score=0;
}
scoreEl.innerText = `score : ${score}`
const correctAns = num1*num2

formEl.addEventListener('submit', ()=>{
  const userAns = +input.value

  if (userAns===correctAns){
    score++
    updateLocalStorage()
  }else{
    score--
    updateLocalStorage()
  }
})

function updateLocalStorage(){
  localStorage.setItem("score", JSON.stringify(score) )
}