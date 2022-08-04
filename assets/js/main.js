
const btn_toggle__input = document.querySelector("nav>section>input")
const btn_toggle__lbl = document.querySelector(".mobile__nav > section > label")
const btn_toggle__ul = document.querySelector("nav>section>ul")
const btn_toggle__li__a = document.querySelectorAll(".menu-links a")
const img__background = document.querySelector(".img-background")
const page_cover = document.querySelector(".page-cover")
const title_h1 = document.querySelector(".page-cover__title__h1")
let nav_min_width = 0



function click_toggle() {
    if (btn_toggle__input.checked) {
        btn_toggle__ul.classList.remove("show_mobile_nav")
    } else {
        btn_toggle__ul.classList.add("show_mobile_nav")
    }
}

function toggle_off() {
    btn_toggle__input.checked = true
    btn_toggle__ul.classList.remove("show_mobile_nav")
}

function title_h1_resize() {
    let font_size = title_h1.style.fontSize

    if (font_size === "" || parseFloat(font_size.substring(0, font_size.length - 3)) <= 7.0) {
        const factor = 0.008
        let size = document.body.clientWidth * factor
        size = size > 7 ? 7 : size
        title_h1.style = `font-size: ${size}rem`
    }
}

//switch between mobile and desktop view
function change_mobile_desktop() {
    if (nav_min_width > document.body.clientWidth) {
        console.log("Cambiar a vista mobil")
        document.querySelector("nav").classList.add("mobile__nav")
        document.querySelector("nav").classList.remove("desktop__nav")
    } else {
        document.querySelector("nav").classList.remove("mobile__nav")
        document.querySelector("nav").classList.add("desktop__nav")
    }
}

function mainLoad() {
    nav_min_width = document.querySelector("nav>img").clientWidth +
        document.querySelector("nav>section").clientWidth + 32

    //Control por propagacion del evento
    document.addEventListener('click', (evt) => {
        if (evt.target.id == "input_toggle") {
            click_toggle()
        }
    }, false)

    change_mobile_desktop()
    title_h1_resize()

    // btn_toggle__li__a.forEach((itm) => {
    //     itm.addEventListener("click", toggle_off, false)
    // })
}

document.body.onload = mainLoad

document.body.onresize = function () {
    toggle_off()
    title_h1_resize()
    change_mobile_desktop()
}