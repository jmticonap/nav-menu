
const btn_toggle__input = document.querySelector("#btn_toggle")
const btn_toggle__lbl = document.querySelector(".btn_toggle__lbl")
const btn_toggle__ul = document.querySelector(".menu-links")
const btn_toggle__li__a = document.querySelectorAll(".menu-links a")
const img__background = document.querySelector(".img-background")
const page_cover = document.querySelector(".page-cover")
const title_h1 = document.querySelector(".page-cover__title__h1")


function click_toggle() {
    if (btn_toggle__input.checked) {
        btn_toggle__ul.style = `display: none`
    } else {
        btn_toggle__ul.style = `display: flex`
    }
}

function toggle_off() {
    btn_toggle__input.checked = true
    btn_toggle__ul.style = `display: none`
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

document.body.onload = function () {
    btn_toggle__input.addEventListener("change", click_toggle, false)
    document.body.onresize = function () {
        toggle_off()
        title_h1_resize()
    }
    btn_toggle__li__a.forEach((itm) => {
        itm.addEventListener("click", toggle_off, false)
    })
}