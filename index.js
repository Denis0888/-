const blocks = document.querySelectorAll('.block')
let timeInterval = 0
blocks.forEach(item => {
    setTimeout(interval, timeInterval, item)
    timeInterval += 700
})

function interval(el) {
    setInterval(() => {
        if      (el.style.backgroundColor == 'red')   el. style.backgroundColor = 'blue' 
        else if (el.style.backgroundColor == 'blue')  el.style.backgroundColor = 'green'
        else                                          el.style.backgroundColor = 'red'
    }, 1000)
}
