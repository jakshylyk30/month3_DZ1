const tabs = document.querySelectorAll(".tabheader__item")
const tabsParent = document.querySelector(".tabheader__items")
const tabsContent = document.querySelectorAll(".tabcontent")


const hideTabContent = () => {
    tabsContent.forEach((item) => {
        item.style.display = "none"
    })
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active")
    })
}


const showTabContent = (i = 0) => {
    tabsContent[i].style.display = "block"
    tabs[i].classList.add("tabheader__item_active")
}

hideTabContent()
showTabContent()

//1
let sliders = 0

const sliderAuto = ()=>{
    const slide = setInterval(()=>{
        sliders++
        if(sliders > 3){
            sliders = 0
        }
        hideTabContent()
        showTabContent(sliders)
    },2000)
}
sliderAuto()

tabsParent.addEventListener("click", (e)=>{
    const target = e.target

    if(target.classList.contains("tabheader__item")){
        tabs.forEach((item, i) => {
            if(target === item) {
                hideTabContent()
                showTabContent(i)
                sliders = i
            }
        })
    }
})

const modalTrigger = document.querySelector(".btn_white")
const modal = document.querySelector(".modal")
const modalCloseBtn = document.querySelector(".modal__close")

const openModal = () => {
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"
}

modalTrigger.addEventListener("click", openModal)

const closeModal = () => {
    modal.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow = ""
}

modalCloseBtn.addEventListener("click", closeModal)

modal.addEventListener("click", (e)=>{
    if(e.target.classList.contains("modal")){
        closeModal()
    }
})

//2

const scroll = ()=>{
    const scrolls = document.documentElement
    if(scrolls.scrollTop + scrolls.clientHeight >= scrolls.scrollHeight){
        openModal()
    }
}
window.addEventListener('scroll', scroll)

///dz5
const succes = document.querySelector('.success')
const message = document.querySelector('.sms')
const forms = document.querySelectorAll("form")

const postData = (url, data) => {
    const req = fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: data
    })
    return req
}

const PostData = (form) => {
    form.addEventListener("submit", (e)=>{
        e.preventDefault()
        const formData = new FormData(form)

        const object = {}

        formData.forEach((item, name) => {
            object[name] = item
        })

        console.log(object)

        const json = JSON.stringify(object)

        postData("server.php", json)
            .then((response) => response.status)
            .then((data) => {
                if(data === 200){
                    closeModal()
                    succes.style.display = 'block'
                    message.innerText = 'Succes'
                    message.style.color = 'green'
                    setTimeout(() => {
                        succes.style.display = 'none'
                    }, 5000)
                } else {
                    closeModal()
                    succes.style.display = 'block'
                    message.innerText = 'Error'
                    message.style.color = 'red'
                    setTimeout(() => {
                        succes.style.display = 'none'
                    }, 5000)
                }
            })
            .catch((e) => console.error(e))
    })
}

forms.forEach((item) => {
    PostData(item)
})

