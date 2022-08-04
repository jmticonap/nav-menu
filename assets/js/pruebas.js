
// function mainLoad(){
//     console.log("asdfkljasdhfkalsdh")
// }

// document.body.addEventListener('resize', function(){
//     alert("Hola")
//     console.log( document.body.clientWidth )
// })

// document.body.addEventListener('load', mainLoad)
//document.addEventListener("DOMContentLoaded", mainLoad, false)

(function(){
    console.log("Hola")
})()

document.body.addEventListener('click', (e) => {
    console.log( e )
})

document.querySelector("button").addEventListener('click',(e) =>{
    console.log("click ejecutado")
})