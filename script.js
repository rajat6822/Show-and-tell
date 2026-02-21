let blinker = document.querySelector('#blinker')
let cursor = document.querySelector('.cursor')
let images = document.querySelectorAll('.images img')

document.addEventListener('mousemove',function(dets){
    console.log(dets.clientX, dets.clientY)
    cursor.style.left = dets.clientX+'px'
    cursor.style.top = dets.clientY+'px'
})


function blink() {
    setTimeout(function () {
        setInterval(function () {
            blinker.style.boxShadow = 'none'
        }, 2000)
    }, 1000)

    setInterval(function () {
        blinker.style.boxShadow = '0 0 15px white'
    }, 2000)
}
blink()
