const box = document.querySelector('.wrapper')

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(e => {
            const div = document.createElement('div')
            const h3 = document.createElement('h3')
            const p = document.createElement('p')
            const span = document.createElement('span')
            const img = document.createElement('img')
            const div2 = document.createElement('div')
            const btn = document.createElement('button')

            div2.setAttribute('class', 'div2')
            div2.append(img, h3, span, btn, p)
            btn.style.border = 'none'
            btn.style.marginLeft = '20px'
            btn.style.marginBottom = '20px'
            btn.style.cursor = 'pointer'
            btn.style.color = 'white'
            btn.style.background = 'red'
            btn.style.marginTop = '20px'
            btn.innerText = e.play
            h3.innerText = 'model: ' + e.name
            p.innerText = 'description: ' + e.description
            span.innerText = "price:  " + e.price
            img.src = e.url
            img.style.marginLeft = '20px'

            div.append(div2)
            box.appendChild(div)
        })
    })
    .catch(error => console.error(error))
