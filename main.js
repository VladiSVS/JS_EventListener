document.querySelector("#grauTaste").addEventListener("click", () => {
    document.body.style.background = "grey"
})

document.querySelector("#weissTaste").addEventListener("click", () => {
    document.body.style.background = "white"
})

document.querySelector("#blauTaste").addEventListener("click", () => {
    document.body.style.background = "blue"
})

document.querySelector("#gelbTaste").addEventListener("click", () => {
    document.body.style.background = "yellow"
})

document.addEventListener("keydown", (event) => {
    let key = event.key
    let keyCode = event.keyCode
    let code = event.code
    document.getElementById("key").innerHTML = key
    document.getElementById("keyCodeTop").innerHTML = keyCode
    document.getElementById("keyCode").innerHTML = keyCode
    document.getElementById("code").innerHTML = code
})