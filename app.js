const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form')
const result = document.querySelector("body > div.result > div > p > span")
const resultBox = document.querySelector('div.result')

form.addEventListener('submit', e =>{
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]){
        score += 25;
        };
    });


    let output = 0;
    const timer = setInterval(() => {
        result.textContent = `${output}%`;
        if (output === score){
            clearInterval(timer);
        } else{
            output++
        }
    }, 10)

    scrollTo(0,0);
    result.innerHTML = score+'%';
    resultBox.classList.remove('d-none');

    if (score === 0) {
        result.classList.add('text-danger')
    } 
    else if (score === 25){
        result.classList.add('text-warning')
    } else {
        result.classList.add('text-primary')
    }

});

// setTimeout(() => {
//     alert('hell ninjas')
// }, 3000)

setInterval(() => {
    console.log('hello')
}, 1000)

// let i = 0;
// const timer =setInterval(() => {
//     console.log('hi');
//     i++;
//     if (i === 5){
//         clearInterval(timer);
//     }
// })