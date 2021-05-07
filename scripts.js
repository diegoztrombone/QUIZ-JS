
const correctAnswer = {
    q1: "La vaca",
    q2: "Fibra óptica",
    q3: "Counter Strike",
    q4: "Porque ya están los de UX/UI para eso",
    q5: "Test1"
}
 
const q1 = {
    v1: "Javascript",
    v2: "La vaca",
    v3: "Su macbook",
    v4: "El chauchat"
}
const q2 = {
    v1: "Un bar",
    v2: "Croquetas",
    v3: "Fibra óptica",
    v4: "Que tenga metro"
}
const q3 = {
    v1: "Fornite",
    v2: "Fifa",
    v3: "Counter Strike",
    v4: "Buscaminas"
}
const q4 = {
    v1: "Porque es un manco",
    v2: "Porque ya están los de UX/UI para eso",
    v3: "Porque 'es un mundo difficcile'",
    v4: "Porque no mola"
}
const q5 = {
    v1: "Test1",
    v2: "Test2",
    v3: "Test3",
    v4: "Test4"
}
const qh1 = "¿Qué eligiría molpe si se quedara abandonado en una isla desierta?"
const qh2 = "¿Que le falta al pueblo de Giorgio para ser perfecto?"
const qh3 = "¿Cual es el juego favorito de Zeta?"
const qh4 = "¿Por qué a Giorgio no le gusta CSS?"
const qh5 = "PREGUNTA TEST"

const selectorHead = document.querySelector("#question-header")
const selectorQ1 = document.querySelector("#question-text1")
const selectorQ2 = document.querySelector("#question-text2")
const selectorQ3 = document.querySelector("#question-text3")
const selectorQ4 = document.querySelector("#question-text4")

const questionHead = [qh1, qh2, qh3, qh4, qh5]

const questionFunction = [questionOne, questionTwo, questionThree, questionFour, questionFive, finish]

const questionButton = document.querySelectorAll("label")
const arrAnswer = Object.values(correctAnswer)
let count = 0  

function questionOne () {
    selectorHead.innerHTML = questionHead[0]
    selectorQ1.innerHTML = q1.v1
    selectorQ2.innerHTML = q1.v2
    selectorQ3.innerHTML = q1.v3
    selectorQ4.innerHTML = q1.v4       
}

function questionTwo () {
    selectorHead.innerHTML = questionHead[1]
    selectorQ1.innerHTML = q2.v1
    selectorQ2.innerHTML = q2.v2
    selectorQ3.innerHTML = q2.v3
    selectorQ4.innerHTML = q2.v4    
}

function questionThree () {
    selectorHead.innerHTML = questionHead[2]
    selectorQ1.innerHTML = q3.v1
    selectorQ2.innerHTML = q3.v2
    selectorQ3.innerHTML = q3.v3
    selectorQ4.innerHTML = q3.v4    
}

function questionFour () {
    selectorHead.innerHTML = questionHead[3]
    selectorQ1.innerHTML = q4.v1
    selectorQ2.innerHTML = q4.v2
    selectorQ3.innerHTML = q4.v3
    selectorQ4.innerHTML = q4.v4
    
}

function questionFive () {
    selectorHead.innerHTML = questionHead[4]
    selectorQ1.innerHTML = q5.v1
    selectorQ2.innerHTML = q5.v2
    selectorQ3.innerHTML = q5.v3
    selectorQ4.innerHTML = q5.v4
    
}

function finish () {
    window.location="finish.html"
}

const answerBox = document.querySelector("#answer")

function questionWrapper () {
    questionOne()
    for (item of questionButton) {
        item.addEventListener("click", (event) => {
            if (event.path[0].innerHTML === arrAnswer[count] ) {
                answerBox.innerHTML = "<p> Respuesta Correcta </p>"
                answerBox.style.color = "green"
                // alert("RESPUESTA CORRECTA")
                count++
                questionFunction[count]()
            } else {
                // alert("RESPUESTA INCORRECTA")
                answerBox.innerHTML = "<p> Respuesta Incorrecta </p>"
                answerBox.style.color = "red"
            }
        })    
    }        
}

questionWrapper()










