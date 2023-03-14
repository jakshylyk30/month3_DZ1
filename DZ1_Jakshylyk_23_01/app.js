const input = document.querySelector('#email')
const btn = document.querySelector('.click')
const span = document.querySelector('.ema')

const regExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+\.(com|ru)$/

const emailFunc = () => {
    if (regExp.test(input.value)){
        span.innerText = 'ok'
        span.style.color = 'green'
    }else {
        span.innerText = 'not ok'
        span.style.color = 'red'
    }
}
btn.onclick = () => emailFunc()


const input2 = document.querySelector('#pass')
const input3 = document.querySelector('#ps')
const btn2 = document.querySelector('.check')
const span2 = document.querySelector('.ema2')

const regExop = /^[a-zA-Z0-9]{8}$/

const paswFunk = () => {
    if (regExop.test(input2.value) && regExop.test(input3.value)) {
        span2.innerText = 'ok'
        span2.style.color = 'green'
    } else {
        span2.innerText = 'not ok'
        span2.style.color = 'red'
    }
}

const yey = document.querySelector('.yey')
yey.onclick = () => {
    input2.type = 'text'
    input3.type = 'text'
}

btn2.onclick = () => paswFunk()



//2
const block = document.querySelector('.little')
let p = 0
const move = () => {
    if (p < 450) {
        p++
        block.style.left = `${p}px`
        setTimeout(move,10)
    }
}

move()
