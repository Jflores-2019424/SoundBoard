const btnBruh = document.getElementById("btnBruh")
const btnDiscord = document.getElementById("btnDiscord")
const btnGnome = document.getElementById("btnGnome")
const btnStik = document.getElementById("btnStik")

btnBruh.addEventListener('click', ()=>{
    document.getElementById("bruh").play()
})

btnDiscord.addEventListener('click', ()=>{
    document.getElementById("discord").play()
})

btnGnome.addEventListener('click', ()=>{
    document.getElementById("gnome").play()
})

btnStik.addEventListener('click', ()=>{
    document.getElementById("stik").play()
})