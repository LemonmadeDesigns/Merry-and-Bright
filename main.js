// Benefits Section

const benefit = document.getElementsByClassName('benefit')
const inclusive = document.getElementById('inclusive')
const grade = document.getElementById('grade')
const safety = document.getElementById('safety')

for (var i = 0; i < benefit.length; i++) {
    benefit[i].addEventListener('mouseover', e => {
        if (e.target.textContent == '> All-inclusive Service') {
            inclusive.style.display = "block"
        }
        if (e.target.textContent == '> High-Grade Lighting') {
            grade.style.display = "block"
        }
        if (e.target.textContent == '> Safety is Priority') {
            safety.style.display = "block"
        }
    })
    benefit[i].addEventListener('mouseleave', e => {
            inclusive.style.display = "none"
            grade.style.display = "none"
            safety.style.display = "none"
    })
}

// Steps Section

const steps = document.getElementsByClassName('steps')
const stepOne = document.getElementById('stepOne')
const stepTwo = document.getElementById('stepTwo')
const stepThree = document.getElementById('stepThree')

for (var i = 0; i < steps.length; i++) {
    steps[i].addEventListener('mouseover', e => {
        if (e.target.children[1].textContent == 1) {
            stepOne.style.display = "block"
        }
        if (e.target.children[1].textContent == 2) {
            stepTwo.style.display = "block"
        }
        if (e.target.children[1].textContent == 3) {
            stepThree.style.display = "block"
        }
    })
    steps[i].addEventListener('mouseleave', e => {
            stepOne.style.display = "none"
            stepTwo.style.display = "none"
            stepThree.style.display = "none"
    })
}

// Frequently Asked Questions Section

const questions = document.getElementsByClassName('questions')

for (var i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', e => {
        if (e.target.firstChild.textContent == "+"){
            e.target.nextElementSibling.style.display = 'block';
            e.target.firstChild.style.backgroundColor = 'red'
            e.target.firstChild.innerHTML = '-'
            
        } else {
            e.target.nextElementSibling.style.display = 'none';
            e.target.firstChild.style.backgroundColor = 'indigo'
            e.target.firstChild.innerHTML = '+'
        }
    })
}

// Get Quote

const getQuote = document.getElementsByClassName('getQuote')
const quoteForm = document.getElementById('getQuote')

for (var i = 0; i < getQuote.length; i++) {
    getQuote[i].addEventListener('click', () => {
        quoteForm.style.display = 'block'
    })
}