
const btn_toggle__input = document.querySelector("#btn_toggle")
const btn_toggle__lbl = document.querySelector(".btn_toggle__lbl")

function click_toggle(){
    //console.log( btn_toggle__input.checked )
}

document.body.onload = function() {
    console.log("PAgina cargada...")
    btn_toggle__lbl.addEventListener("click", click_toggle,false)
}