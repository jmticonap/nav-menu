
const btn_toggle__input = document.querySelector("#btn_toggle")
const btn_toggle__lbl = document.querySelector(".btn_toggle__lbl")
const btn_toggle__li__a = document.querySelectorAll(".menu-links a")
const img__background = document.querySelector(".img-background")

function click_toggle(){
    //console.log( btn_toggle__input.checked )
}

function toggle_off(){
    if(!btn_toggle__input.checked) btn_toggle__input.checked = true
}

function imgBackgrounResize(){
    if(document.body.clientWidth < 600){
        img__background.clientHeight = (img__background.clientWidth * 578) / 375
    }
}

document.body.onload = function() {
    console.log("PAgina cargada...")
    btn_toggle__lbl.addEventListener("click", click_toggle,false)
    document.body.onresize = toggle_off
    btn_toggle__li__a.forEach((itm) => {
        itm.addEventListener("click",toggle_off, false)
    })

    img__background.addEventListener("resize", imgBackgrounResize,false)
}