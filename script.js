let blinker = document.querySelector('#blinker')
let cursor = document.querySelector('.cursor')
let images = document.querySelectorAll('.images img')
let buttons = document.querySelectorAll('.images .btn')

function cursorMove(){
    document.addEventListener('mousemove',function(dets){
    cursor.style.left = dets.clientX+'px'
    cursor.style.top = dets.clientY+'px'
})
}
cursorMove()
 

function blink() {
    setTimeout(function () {
        setInterval(function () {
            blinker.style.boxShadow = 'none'
        }, 2000)
    }, 1000)

    setInterval(function () {
        blinker.style.boxShadow = '0 0 20px white'
    }, 2000)
}
blink()

function imageButton(){
    buttons.forEach(function(btn) {
    let upper = btn.querySelector('.images .btn .upper')
    let downer = btn.querySelector('.images .btn .downer')

    btn.addEventListener('mouseenter',function(){
        upper.style.transform = 'translate(120%, -120%)'
        downer.style.transform = 'translate(0%, 0%)'
        images.style.filter = 'grayscale(0%)'
    })
    btn.addEventListener('mouseleave',function(){
        upper.style.transform = 'translate(0%, 0%)'
        downer.style.transform = 'translate(-120%, 120%)'
    })
});
}
imageButton()
